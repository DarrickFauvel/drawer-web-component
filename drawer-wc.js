const template = document.createElement("template")
// fixed top-0 left-1/2 right-1/2 -translate-x-1/2 w-[90%] max-w-[390px] text-white z-50
template.innerHTML = /*html*/ `
  <style>
    .drawer {
      position: fixed;
      top: 0;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 390px;
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
      background-color: hsla(0, 0%, 20%, .9);
      backdrop-filter: blur(10px);
      color: white;
      font-family: sans-serif;
      z-index: 50;
    }
    .drawer__header {
      display: flex;
      justify-content: center;
      background-color: purple;
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
      padding-block: .25em;
      cursor: pointer;
    }

    .project {
      background-color: lightgray;
    }
    .tools__heading {
      margin: 0;
      font-weight: bold;
    }
    .tools__list {
      margin: 0;
    }
  </style>

  <article class='drawer'>
    <header class='drawer__header'><span class="drawer__header-title">NEED DRAWER TITLE</span></header>
    <section class="project">
      <h2 class="project__heading">NEED PROJECT HEADING</h2>
      <h3 class="tools__heading">Tools used...</h3>
      <ul class="tools__list">NEED TOOLS LIST</ul>
    </section>
  </article>
`

class Drawer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector(".drawer__header-title").textContent =
      this["drawer-title"]
    this.shadowRoot.querySelector(".project__heading").textContent =
      this["project-title"]

    const ulEl = this.shadowRoot.querySelector(".tools__list")
    const project = JSON.parse(this["project-details"])
    let toolsHtml = ``
    project.tools.forEach((tool) => {
      toolsHtml += `<li>${tool.name}</li>`
    })
    ulEl.innerHTML = toolsHtml
  }

  static get observedAttributes() {
    return ["drawer-title", "project-details"]
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return
    this[property] = newValue
  }
}

customElements.define("drawer-wc", Drawer)
