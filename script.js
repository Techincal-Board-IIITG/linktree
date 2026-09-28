const root = document.documentElement;

const set = (selector, value) => {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = value;
    }
};

// Apply theme colors
Object.entries(THEME.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
});

// Site content
set("#logo-name", THEME.site.name);
set("#logo-subtitle", THEME.site.subtitle);
set("#site-title", THEME.site.title);
set("#site-title-accent", THEME.site.titleAccent);
set("#site-tagline", THEME.site.tagline);
set("#site-description", THEME.site.description);
set("#hero-description", THEME.site.description);

// Terminal
set(
    "#terminal-user",
    `${THEME.terminal.user}@${THEME.terminal.host}:~$`
);

set("#terminal-version", THEME.terminal.version);
set("#terminal-name", THEME.site.name);

// Footer
set("#footer-left", THEME.footer.left);
set("#footer-right", THEME.footer.right);

// Render links
const linksContainer = document.querySelector("#links");

LINKS.forEach((link, index) => {
    const card = document.createElement("a");

    card.className = `link-card ${link.accent}`;
    card.href = link.url;

    if (link.url.startsWith("http")) {
        card.target = "_blank";
        card.rel = "noopener noreferrer";
    }

    const iconSize = link.iconSize || 42;

    card.innerHTML = `
        <div class="link-number">
            [${String(index + 1).padStart(2, "0")}]
        </div>

        <div class="link-icon">
            <img
                src="${link.icon}"
                alt="${link.title}"
                width="${iconSize}"
                height="${iconSize}"
            >
        </div>

        <div class="link-info">
            <h2>${link.title}</h2>
        </div>

        <div class="link-arrow">
            →
        </div>
    `;

    linksContainer.appendChild(card);
});

// Terminal typing
const commands = [
    "./explore",
    "./links",
    "./campus",
    "./connect"
];

const commandElement =
    document.querySelector("#terminal-command");

let commandIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeCommand() {
    const command = commands[commandIndex];

    if (!deleting) {
        characterIndex++;

        commandElement.textContent =
            command.slice(0, characterIndex);

        if (characterIndex >= command.length) {
            deleting = true;

            setTimeout(typeCommand, 1800);

            return;
        }
    } else {
        characterIndex--;

        commandElement.textContent =
            command.slice(0, characterIndex);

        if (characterIndex <= 0) {
            deleting = false;

            commandIndex =
                (commandIndex + 1) % commands.length;
        }
    }

    setTimeout(
        typeCommand,
        deleting ? 40 : 80
    );
}

typeCommand();