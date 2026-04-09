# Executive CV - Engineering Leadership

[Español](#español) | [English](#english)

---

<a name="español"></a>
## 🇪🇸 Versión en Español

Este repositorio contiene el código fuente de mi currículum profesional, diseñado con un enfoque estratégico en **Liderazgo de Ingeniería, Gestión de Equipos de Alto Rendimiento y Estrategia Tecnológica**.

### 🤝 Colaboración Estratégica
Este proyecto fue diseñado y desarrollado en **colaboración estratégica con Gemini (Google AI)**, utilizando un enfoque de ingeniería de prompts para optimizar la arquitectura modular y la narrativa ejecutiva.

### 🚀 Arquitectura Técnica
* **Modularidad (DRY):** Lógica visual centralizada en `_includes/cv_content.html`.
* **Gestión de Datos:** Contenido gestionado desde `_data/cv.yml`.
* **Estructura Multi-idioma:** Directorios optimizados para SEO (Raíz para ES, `/en/` para EN).
* **Containerización:** Soporte para **Docker**, asegurando un entorno replicable.

### 🛠️ Stack Tecnológico
* **Generador:** Jekyll
* **Estilos:** Tailwind CSS
* **IA Colaboradora:** Gemini (Google AI)
* **Deploy:** GitHub Pages

### 💻 Desarrollo Local
1. `git clone https://github.com/mclanza/mclanza.github.io.git`
2. `docker-compose up`
3. Abrir `http://localhost:4000`

---

<a name="english"></a>
## 🇺🇸 English Version

This repository hosts the source code for my professional CV, strategically focused on **Engineering Leadership, High-Performance Team Building, and Technology Strategy**.

### 🤝 Strategic Collaboration
This project was designed and developed in **strategic collaboration with Gemini (Google AI)**, applying prompt engineering techniques to optimize modular architecture and executive narrative.

### 🚀 Technical Architecture
* **Modularity (DRY):** Visual logic centralized in `_includes/cv_content.html`.
* **Data Management:** All content is managed via `_data/cv.yml`.
* **Multi-language Structure:** Optimized directory mapping (Root for ES, `/en/` for EN).

### 🛠️ Technical Stack
* **Generator:** Jekyll
* **Styles:** Tailwind CSS
* **AI Collaborator:** Gemini (Google AI)
* **Deploy:** GitHub Pages

### 💻 Local Development
1. `git clone https://github.com/mclanza/mclanza.github.io.git`
2. `docker-compose up`
3. Open `http://localhost:4000`

---

### 📁 Project Structure / Estructura del Proyecto
```text
├── _data/
│   └── cv.yml                # Source of Truth / Fuente de verdad
├── _includes/
│   ├── cv_content.html       # Shared UI Logic / Lógica UI compartida
│   └── research_content.html # Research page content / Contenido de página de investigación
├── _layouts/
│   └── default.html          # Base layout & Tailwind config
├── assets/
│   └── css/
│       └── main.css          # Custom styles & Tailwind directives
├── en/                       # English Version (Directory)
│   ├── index.html            # Bio (EN)
│   ├── research.html         # Research & Innovation (EN)
│   └── volunteering.html     # Volunteering Activities (EN)
│   └── certifications.html   # Certifications (EN)
├── index.html                # Bio (ES)
├── investigacion.html        # Investigación & Innovación (ES)
├── voluntariado.html         # Actividades de Voluntariado (ES)
├── certificaciones.html      # Certificaciones (ES)
├── _config.yml               # Jekyll global config
├── .gitignore                # Git exclusions
├── docker-compose.yml        # Docker services & environment
└── README.md                 # Strategic Documentation