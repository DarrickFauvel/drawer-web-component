const template = document.createElement("template")
template.innerHTML = /*html*/ `
  <style>
    * {
      box-sizing: border-box;
    }
    .drawer {
      position: fixed;
      width: 90%;
      max-width: 390px;
      top: 0;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 390px;
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
      color: hsl(0, 0%, 95%);
      font-family: sans-serif;
      z-index: 50;
    }
    .drawer__header {
      position: fixed;
      width: 100%;
      height: 2em;
      padding-inline: .5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
      padding-block: .25em;
      cursor: pointer;
      z-index: 10;
      background: linear-gradient(270deg, #40ae92, #63ae40, #5140ae);
      background-size: 600% 600%;
      -webkit-animation: AnimationName 10s ease infinite;
      -moz-animation: AnimationName 10s ease infinite;
      animation: AnimationName 10s ease infinite;
    }

    .gear-icon {
      transition: transform 1s ease-in-out;
    }

    .project-section {
      position: absolute;
      top: -300px;
      width: 100%;
      font-size: .9rem;
      background-color: hsla(0, 0%, 20%,.8);
      backdrop-filter: blur(4px);
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
      transition: transform .5s ease-in-out;
    }
    .project-section.open {
      transform: translateY(300px);
    }
    .project__heading {
      background-color: #444;
      //color: #ffc022;
      padding-inline: 1em;
      padding-block: .5em;
      padding-top: 1.25em;
    }
    .project-section .articles {
      padding-inline: 1.25em;
      padding-bottom: .5em;
    }
    .articles h3 strong {
      font-size: 1rem;
      color: #ffc227;
    }
    .tools__heading {
      margin: 0;
      font-weight: bold;
    }
    .tools__list {
      list-style: none;
      margin-top: .25em;
      padding-left: 1.5em;
      display: flex;
      flex-direction: column;
      gap: .3em;
    }
    .tool-name {
      font-weight: bold;
    }
    .tool-note {
      font-weight: normal;
      font-size: .7rem;
      color: #bbb;
    }

    @-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
  </style>

  <article class='drawer'>
    <header class='drawer__header'>
      <span class="gear-icon gear-icon-left">⚙️</span>
      <span class="drawer__header-title">NEED DRAWER TITLE</span>
      <span class="gear-icon gear-icon-right">⚙️</span>
    </header>
    <section class="project-section">
      <h2 class="project__heading">NEED PROJECT HEADING</h2>
      <div class="articles">
        <article id="type">
          <h3><span class="type-title">NEED TYPE NAME</span>: </h3>
          <p class="project-description">NEED TYPE DESCRIPTION</p>
        </article>
        <article id="tools">
          <h3 class="tools__heading">Tools used...</h3>
          <ul class="tools__list">NEED TOOLS LIST</ul>
        </article>
      </div>
    </section>
  </article>
`

class AppDrawer extends HTMLElement {
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: "open" })
    this.shadow.appendChild(template.content.cloneNode(true))

    this.drawerHeader = this.shadow.querySelector(".drawer__header")
    this.drawerHeaderTitle = this.shadow.querySelector(".drawer__header-title")
    this.projectSection = this.shadow.querySelector(".project-section")
    this.projectHeading = this.shadow.querySelector(".project__heading")
    this.projectIntro = this.shadow.querySelector("article#type h3")
    this.typeTitle = this.shadow.querySelector(".type-title")
    this.projectDescription = this.shadow.querySelector(".project-description")

    // Drawer header click
    this.drawerHeader.addEventListener("click", () => {
      this.toggleDrawer()
    })

    // Drawer header hover
    this.drawerHeader.addEventListener("mouseenter", () => {
      this.setAttribute("is-drawer-open", "true")
    })
  }

  toggleDrawer() {
    if (JSON.parse(this.getAttribute("is-drawer-open"))) {
      this.setAttribute("is-drawer-open", "false")
    } else {
      this.setAttribute("is-drawer-open", "true")
    }
  }

  createToolsList() {
    const toolsList = this.shadow.querySelector(".tools__list")
    const project = JSON.parse(this["project-details"])
    let toolsHtml = ``
    project.tools.forEach((tool) => {
      toolsHtml += `<li class="tool-name">${tool.name}
        <span class="tool-note">${tool.note}</span>
      </li>`
    })
    toolsList.innerHTML = toolsHtml
  }

  connectedCallback() {
    this.drawerHeaderTitle.textContent = this.getAttribute("drawer-title")

    this.project = JSON.parse(this.getAttribute("project-details"))
    this.projectHeading.textContent = this.project.title

    this.projectIntro.innerHTML = `This is a <strong>${this.project.type}</strong> from <strong>${this.project.provider}</strong>.`
    this.typeTitle.textContent = this.project.type
    this.projectDescription.textContent = this.project.description

    this.createToolsList()
  }

  static get observedAttributes() {
    return ["drawer-title", "is-drawer-open", "project-details"]
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return
    this[property] = newValue

    if (property === "is-drawer-open" && newValue === "true") {
      this.projectSection.classList.add("open")
    }
    if (property === "is-drawer-open" && newValue === "false") {
      this.projectSection.classList.remove("open")
    }
  }
}

customElements.define("app-drawer", AppDrawer)
