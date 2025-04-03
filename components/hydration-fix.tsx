"use client"

import { useEffect } from "react"

export function HydrationFix() {
  useEffect(() => {
    // Function to remove all Dark Reader attributes and styles
    const removeDarkReaderAttributes = () => {
      try {
        // Create a style element to override Dark Reader styles
        const style = document.createElement("style")
        style.textContent = `
          [data-darkreader-inline-stroke],
          [data-darkreader-inline-color],
          [data-darkreader-inline-outline],
          [data-darkreader-inline-border],
          [data-darkreader-inline-border-top],
          [data-darkreader-inline-border-right],
          [data-darkreader-inline-border-bottom],
          [data-darkreader-inline-border-left],
          [data-darkreader-inline-bgcolor],
          [data-darkreader-inline-bgimage] {
            all: revert !important;
          }
          
          *[style*="--darkreader"] {
            all: revert !important;
          }
        `
        document.head.appendChild(style)

        // Remove all data-darkreader attributes from all elements
        document.querySelectorAll("*").forEach((el) => {
          // Get all attributes
          const attributes = el.getAttributeNames()
          
          // Remove any darkreader-related attributes
          attributes.forEach((attr) => {
            if (attr.startsWith("data-darkreader")) {
              el.removeAttribute(attr)
            }
          })
          
          // Clean inline styles with darkreader variables
          if (el.hasAttribute("style")) {
            const style = el.getAttribute("style")
            if (style && style.includes("--darkreader")) {
              // Either remove the style completely or clean it
              if (style.replace(/--darkreader[^;]+;?/g, "").trim() === "") {
                el.removeAttribute("style")
              } else {
                el.setAttribute("style", style.replace(/--darkreader[^;]+;?/g, ""))
              }
            }
          }
        })
        
        // Set up MutationObserver to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                  const el = node as Element
                  const attributes = el.getAttributeNames?.() || []
                  attributes.forEach((attr) => {
                    if (attr.startsWith("data-darkreader")) {
                      el.removeAttribute(attr)
                    }
                  })
                }
              })
            }
          })
        })
        
        observer.observe(document.body, { 
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['data-darkreader-inline-stroke', 'style']
        })
        
        return () => observer.disconnect()
      } catch (error) {
        console.error("Error removing Dark Reader attributes:", error)
      }
    }

    // Run immediately
    removeDarkReaderAttributes()
  }, [])

  return null
}

