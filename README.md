# FundsXpert #
A website for finding overpaid tax returns

## gh-pages deployment link ##
http://mikemeding.github.io/fx-web/public_html/index.html

## Directory Structure ##
```
.
├── AlphaMemo.pdf
├── nbproject
│   ├── project.properties
│   └── project.xml
├── public_html
│   ├── app
│   │   ├── app.js      // Contains all page routing
│   │   └── components
│   │       ├── admin       // All pages accessable after logging in
│   │       │   ├── adminApp.js
│   │       │   ├── adminIndex.html
│   │       │   └── components
│   │       │       ├── clients
│   │       │       │   ├── clientsController.js
│   │       │       │   └── clientsView.html
│   │       │       ├── edit-config
│   │       │       │   ├── editConfigController.js
│   │       │       │   └── editConfigView.html
│   │       │       └── find-clients
│   │       │           ├── findClientsController.js
│   │       │           └── findClientsView.html
│   │       ├── client      // Public pages
│   │       │   ├── contact
│   │       │   │   ├── contactController.js
│   │       │   │   └── contactView.html
│   │       │   ├── faq
│   │       │   │   ├── faqController.js
│   │       │   │   └── faqView.html
│   │       │   ├── home
│   │       │   │   ├── homeController.js
│   │       │   │   └── homeView.html
│   │       │   ├── news
│   │       │   │   ├── newsController.js
│   │       │   │   └── newsView.html
│   │       │   ├── refund
│   │       │   │   ├── refundController.js
│   │       │   │   └── refundView.html
│   │       │   └── report
│   │       │       ├── reportController.js
│   │       │       └── reportView.html
│   │       └── modals      // Public Modals
│   │           ├── delete
│   │           │   ├── deleteModalController.js
│   │           │   └── deleteModalTemplate.html
│   │           ├── edit
│   │           │   ├── editModalController.js
│   │           │   └── editModalTemplate.html
│   │           ├── login
│   │           │   ├── loginModalController.js
│   │           │   └── loginModalTemplate.html
│   │           └── register
│   │               ├── registerModalController.js
│   │               └── registerModalTemplate.html
│   ├── assets
│   │   ├── css
│   │   │   ├── animate.css
│   │   │   ├── bootstrap.css
│   │   │   ├── ckeditor.css
│   │   │   ├── main.css
│   │   │   └── modal.css
│   │   ├── directives
│   │   │   └── ngGoogleCharts.js
│   │   ├── img
│   │   │   ├── google-map.png
│   │   │   ├── logo64px.png
│   │   │   ├── logo.png
│   │   │   └── psd
│   │   │       └── google-map.psd
│   │   ├── json
│   │   │   └── faq.json
│   │   └── mobile
│   │       ├── apple-touch-icon.png
│   │       ├── browserconfig.xml
│   │       ├── favicon.ico
│   │       ├── tile.png
│   │       └── tile-wide.png
│   └── index.html      // Main page loading with all scripts and CDNs
└── README.md
```

