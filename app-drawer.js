const template = document.createElement("template")
template.innerHTML = /* html */ `
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
      background-color: #2f48a2;
      //background: linear-gradient(270deg, #40ae92, #63ae40, #5140ae);
      //background-size: 600% 600%;
      //-webkit-animation: AnimationName 10s ease infinite;
      //-moz-animation: AnimationName 10s ease infinite;
      //animation: AnimationName 10s ease infinite;
    }

    .header-icon {
      width: 1.4em;
    }
    .header-icon-left {
    }
    .header-icon-right {
    }

    .project-section {
      position: absolute;
      top: 0;
      width: 100%;
      font-size: .9rem;
      background-color: hsla(0, 0%, 20%,.8);
      backdrop-filter: blur(4px);
      border-bottom-left-radius: .5em;
      border-bottom-right-radius: .5em;
      //transform: translateY(0);
      transform: translateY(-100%);
      //transition: transform .5s ease-in-out;
      transition: transform .5s ease-in-out
    }
    .project-section.open {
      transform: translateY(0);
    }
    .project__heading {
      background-color: #2b365e;
      //color: #ffc022;
      padding-inline: 1em;
      padding-block: .5em;
      padding-top: 1.25em;
    }
    .project-section .articles {
      padding-inline: 1.25em;
      padding-bottom: .5em;
      margin-bottom: 1em;
      max-height: 90vh;
      overflow-y: auto;
    }
    .articles .intro {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .articles h3 strong {
      font-size: 1rem;
      color: #ffc227;
    }
    article h3 {
      margin-block-end: 0;
    }
    article p {
      margin-block-start: 0;
    }

    .tools {
      margin-block-start: 1em;
      background-color: #666;
      border-radius: .5em;
      overflow: hidden;
    }
    .tools__heading {
      margin: 0;
      padding: .5em;
      font-weight: bold;
      background-color: #2f48a2;
    }
    .tools__list {
      list-style: none;
      margin-top: .25em;
      padding: .5em;
      display: flex;
      justify-content: center;
      gap: 1em;
    }
    .tool-name {
      font-weight: bold;
    }
    .tool-note {
      display: block;
      font-weight: normal;
      font-size: .7rem;
      color: #bbb;
    }
    .tool-icon {
      width: 2em;
      height: 2em;
      background-color: red;
    }

    .footer {
      text-align: center;
      font-size: .75rem;
      margin-block-end: .25em;
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

    slot[name='type'], slot[name='provider'] {
      color: goldenrod;
    }


  </style>

  <article class='drawer'>
    <header class='drawer__header'>
      <svg class="header-icon header-icon-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-9.5a3.625 3.625 0 0 1 1.348 6.99a.837.837 0 0 0-.305.201c-.044.05-.051.114-.05.18L13 14a1 1 0 0 1-1.993.117L11 14v-.25c0-1.153.93-1.845 1.604-2.116a1.626 1.626 0 1 0-2.229-1.509a1 1 0 1 1-2 0A3.625 3.625 0 0 1 12 6.5Z"/></g></svg>
      <slot name="drawer-title">NEED DRAWER TITLE</slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5.25A3.25 3.25 0 0 1 5.25 2h11.5A3.25 3.25 0 0 1 20 5.25v2.76a4.508 4.508 0 0 0-1.5.096V7h-15v9.75c0 .966.784 1.75 1.75 1.75h7.985l-.441.764a2.457 2.457 0 0 0-.28.736H5.25A3.25 3.25 0 0 1 2 16.75V5.25ZM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v.25h15v-.25a1.75 1.75 0 0 0-1.75-1.75H5.25ZM19.857 9a3.496 3.496 0 0 0-3.356 1.736a3.5 3.5 0 0 0 .184 3.788l-3.025 5.24a1.459 1.459 0 0 0 2.526 1.458l3.03-5.25a3.5 3.5 0 0 0 2.976-5.761l-1.65 2.858a1.167 1.167 0 1 1-2.021-1.167l1.65-2.858A3.478 3.478 0 0 0 19.857 9Zm-9.554.243a.75.75 0 0 1-.046 1.06L7.86 12.5l2.397 2.197a.75.75 0 0 1-1.014 1.106l-3-2.75a.75.75 0 0 1 0-1.106l3-2.75a.75.75 0 0 1 1.06.046Zm2.954 6.56l2.02-1.852a4.495 4.495 0 0 1-.008-2.91l-2.012-1.844a.75.75 0 0 0-1.014 1.106L14.64 12.5l-2.397 2.197a.75.75 0 0 0 1.014 1.106Z"/></svg>
    </header>

    <section class="project-section">
      <header>
        <h2 class="project__heading"><slot name="title">NEED PROJECT HEADING</slot></h2>
      </header>
      <div class="articles">
        <article>
          <span class="intro">This is a <slot name="type">NEED TYPE</slot> from <slot name="provider">NEED PROVIDER</slot>.</span>
        </article>
        <article class="tools">
          <h3 class="tools__heading">Tools used...</h3>
          <ul class="tools__list"></ul>
        </article>
        <article>
          <h3>Challenge: </h3>
          <p>
            <slot name="challenge">NEED CHALLENGE</slot>
          </p>
        </article>
        <article>
          <h3>Problem: </h3>
          <p>
            <slot name="problem">NEED PROBLEM</slot>
          </p>
        </article>
        <article>
          <h3>Solution: </h3>
          <p>
            <slot name="solution">NEED SOLUTION</slot>
          </p>
        </article>
        </div>
        <footer class="footer">
          Created by <slot name="author">NEED AUTHOR</slot>
        </footer>
    </section>
  </article>
`

class AppDrawer extends HTMLElement {
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: "open" })
    this.shadow.appendChild(template.content.cloneNode(true))

    this.projectSection = this.shadow.querySelector(".project-section")
  }

  connectedCallback() {
    this.drawerHeader = this.shadow.querySelector(".drawer__header")

    // Drawer header click
    this.drawerHeader.addEventListener("click", () => {
      this.toggleDrawer()
    })

    // Drawer header hover
    this.drawerHeader.addEventListener("mouseenter", () => {
      this.setAttribute("is-drawer-open", "true")
    })

    this.createToolsList()
  }

  static get observedAttributes() {
    return ["is-drawer-open"]
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

  // Helper methods
  toggleDrawer() {
    if (JSON.parse(this.getAttribute("is-drawer-open"))) {
      this.setAttribute("is-drawer-open", "false")
    } else {
      this.setAttribute("is-drawer-open", "true")
    }
  }

  createToolsList() {
    const toolsList = this.shadow.querySelector(".tools__list")
    const project = JSON.parse(this.getAttribute("project-details"))
    project.tools.forEach((tool) => {
      const liEl = document.createElement("li")
      liEl.classList.add("tool")
      const div1El = document.createElement("div")
      div1El.classList.add("tool-icon")
      div1El.style.display = "block"
      div1El.style.background = `url('${tool.icon}') no-repeat center center / contain`
      const div2El = document.createElement("div")
      div2El.textContent = tool.name
      const spanEl = document.createElement("span")
      spanEl.classList.add("tool-note")
      spanEl.textContent = tool.note

      div2El.appendChild(spanEl)
      liEl.appendChild(div1El)
      liEl.appendChild(div2El)
      toolsList.appendChild(liEl)
    })
  }
}

customElements.define("app-drawer", AppDrawer)
