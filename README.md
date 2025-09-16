# Marker Website - Copic Brand Showcase

An interactive single-page marketing website showcasing Copic brand markers through a full-screen scrolling experience. This educational project demonstrates modern web development techniques while presenting a physical product in an engaging digital format.

## Features

- **Full-Screen Scrolling Interface** - Smooth section transitions using fullPage.js
- **Interactive Navigation** - Section-based routing with anchor links
- **Product Showcase** - Detailed presentation of Copic marker features
- **Visual Design Excellence** - High-quality product imagery and branding
- **Responsive Design** - Mobile-optimized with touch support
- **Educational Content** - Product specifications and color information

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Interactive Library**: fullPage.js v2.6.6 for smooth scrolling
- **JavaScript Framework**: jQuery 2.1.4 (Google CDN)
- **Typography**: Adobe Typekit (freight-sans-pro font family)
- **Assets**: High-quality PNG, SVG, and JPG product images

## Installation & Setup

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection (for CDN resources)
- Web server (recommended for development)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/whiletrace/marker-website.git
   cd marker-website
   ```

2. **Serve the files:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or open index.html directly in browser
   ```

3. **Access the website:**
   Open your browser to `http://localhost:8000` or directly open `index.html`

## Project Structure

```
marker-website/
├── index.html              # Main application entry point
├── css/
│   ├── jquery.fullPage.css # fullPage.js library styles
│   └── proj2.css           # Custom project styles (5KB)
├── js/
│   ├── jquery.fullPage.min.js # fullPage.js library v2.6.6
│   └── scripts.js          # Application configuration
└── images/                 # Visual assets (3MB+ total)
    ├── homelogo.png/.svg   # Brand logos and navigation
    ├── copicnav.png        # Navigation elements
    ├── ciao.png            # Product images
    ├── Color_Wide.png      # Color showcase
    └── *-background*.png   # Section backgrounds
```

## Section Overview

### Section 1: Brand Introduction
- **Anchor**: `firstpage`
- **Content**: Copic brand logo and introduction
- **Visual**: Animated brand presentation
- **Purpose**: Welcome and brand recognition

### Section 2: Quality Statement
- **Anchor**: `secondpage` 
- **Content**: Quality assurance messaging
- **Focus**: Brand reliability and professional standards
- **Design**: Clean, professional layout

### Section 3: Color Variety
- **Anchor**: `thirdpage`
- **Content**: "358 Colors Available" showcase
- **Visual**: Color palette presentation
- **Highlight**: Product range and variety

### Section 4: Product Details  
- **Anchor**: `fourthpage`
- **Content**: Ciao marker line features
- **Specifications**: Product details and benefits
- **Target**: Specific product information

## fullPage.js Configuration

### Script Configuration (`js/scripts.js`)
```javascript
$('.fullpage').fullpage({
    menu: false,
    anchors: ['firstpage', 'secondpage', 'thirdpage', 'fourthpage', 
              'fifthpage', 'sixthpage', 'seventhpage', 'eighthpage', 'ninthpage'],
    navigation: false,
    navigationPosition: 'right',
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
});
```

### Features Enabled
- **Section Anchors** - URL-based navigation
- **Slides Navigation** - Bottom navigation indicators  
- **Smooth Scrolling** - Fluid section transitions
- **Touch Support** - Mobile-friendly interactions

## Visual Design

### Color Scheme
- **Primary**: Copic brand teal (#1ab5a6)
- **Secondary**: Yellow accent (#ffd700)
- **Accent**: Coral/pink highlights (#ff6b6b)
- **Background**: Clean white with image overlays

### Typography
```css
/* Adobe Typekit Integration */
font-family: "freight-sans-pro", sans-serif;
```

### Responsive Breakpoints
```css
/* Mobile optimization */
@media (max-width: 550px) {
    /* Mobile-specific styles */
}
```

## Brand Presentation

### Product Focus: Copic Markers
- **Brand**: Copic professional marker system
- **Target Market**: Artists, designers, illustrators
- **Key Features**: 
  - 358 available colors
  - Professional-grade quality
  - Ciao marker line showcase
  - Refillable and replaceable nibs

### Educational Disclaimer
**Important Legal Notice:**
- No official affiliation with Copic Brand Markers
- Educational/portfolio project only
- Respects Copic's branding and copyright ownership
- No claims of trademark ownership

## Technical Implementation

### Dependencies
```html
<!-- External CDN Resources -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="//use.typekit.net/mgn6uvj.js"></script>

<!-- Local Libraries -->
<script src="js/jquery.fullPage.min.js"></script>
<script src="js/scripts.js"></script>
```

### CSS Architecture
- **Library Styles**: fullPage.js default styling
- **Custom Styles**: Brand-specific design implementation
- **Responsive Design**: Mobile-first media queries
- **Transform Animations**: CSS3 rotations and transitions

### Performance Considerations
- **Image Optimization**: Compressed assets for web delivery
- **CDN Usage**: Fast loading of external libraries
- **Minimal JavaScript**: Lightweight custom scripting
- **Caching**: Browser caching for static assets

## Browser Compatibility

- **Modern Browsers**: Full functionality with all animations
- **jQuery 2.1.4 Support**: Requires modern JavaScript engine
- **CSS3 Transforms**: Requires transform support for visual effects
- **Touch Devices**: Optimized for mobile and tablet interaction

## Development Features

### No Build Process
- **Direct Development**: Edit files and refresh browser
- **Static Assets**: No compilation or bundling required
- **Immediate Updates**: Changes visible instantly

### Asset Management
- **Organized Structure**: Logical file organization
- **Relative Paths**: Portable file references
- **Image Assets**: High-quality product photography

## Educational Value

This project demonstrates:
- **Single-Page Applications**: Modern SPA development concepts
- **Interactive Design**: User engagement through scrolling interfaces
- **Responsive Development**: Mobile-first design approach
- **Brand Presentation**: Professional product showcase techniques
- **Library Integration**: Third-party library implementation

## Use Cases

- **Portfolio Project**: Demonstrating web development skills
- **Product Marketing**: Showcasing physical products digitally
- **Brand Study**: Understanding brand presentation techniques
- **Learning Tool**: fullPage.js and jQuery integration example

## Performance Metrics

- **Total Size**: ~5.6MB (primarily high-quality images)
- **Load Time**: Optimized for reasonable load speeds
- **Interaction**: Smooth scrolling and transitions
- **Mobile Performance**: Responsive and touch-optimized

## Contributing

This is an educational project. For learning purposes:
1. Fork the repository
2. Experiment with different sections
3. Modify animations and transitions
4. Test responsive behavior
5. Share learning outcomes

## Legal Compliance

### Trademark Respect
- Copic brand trademarks remain with their owners
- Educational use with proper attribution
- No commercial intent or affiliation claims
- Demonstrates respect for intellectual property

### Project Purpose
- **Educational Only**: Learning web development techniques
- **Portfolio Demonstration**: Showcasing technical skills
- **Brand Appreciation**: Celebrating quality design products

## License

Educational project with proper brand attribution and respect for trademarks.

## Author

**Trace Harris**
- Web Development Student
- Educational Project Creator

---

*An interactive product showcase demonstrating modern web development techniques while respecting brand integrity and intellectual property rights.*