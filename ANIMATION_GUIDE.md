# 🎬 Landing Page Animation Guide

## Quick Reference for Animations

### 🎯 Animation Classes Available

| Class Name | Effect | Duration | Use Case |
|------------|--------|----------|----------|
| `animate-fade-in` | Fade in + slight up | 600ms | Headers, text |
| `animate-fade-in-up` | Fade in + larger up | 800ms | Cards, sections |
| `animate-fade-in-left` | Slide from left | 800ms | Left content |
| `animate-fade-in-right` | Slide from right | 800ms | Right content |
| `animate-pulse-subtle` | Gentle pulse | 3s loop | Icons, badges |
| `animate-slide-in-bottom` | Slide up from bottom | 400ms | Mobile menu |

### ⏱️ Delay Classes

```css
animation-delay-200  /* 200ms delay */
animation-delay-400  /* 400ms delay */
animation-delay-600  /* 600ms delay */
animation-delay-800  /* 800ms delay */
```

### 🎨 Hover Effects Pattern

```jsx
// Standard hover pattern
className="hover:scale-105 hover:shadow-lg transition-all duration-300"

// Card hover pattern
className="hover:-translate-y-2 hover:border-purple-500 transition-all duration-300"

// Icon hover pattern
className="hover:scale-110 hover:rotate-12 transition-all duration-300"

// Button hover pattern
className="hover:scale-105 hover:bg-purple-700 transition-all duration-300"
```

---

## 📍 Where Animations Are Applied

### Hero Section
```jsx
// Logo
<Link className="group animate-fade-in">
  <Image className="group-hover:scale-110 group-hover:rotate-12" />
</Link>

// Navigation
<div className="animate-fade-in animation-delay-200">
  <Link className="hover:scale-110 transition-all duration-300" />
</div>

// Hero Content
<div className="animate-fade-in-left">  {/* Phone mockups */}
<div className="animate-fade-in-right"> {/* Text content */}
```

### Features Section
```jsx
// Section header
<div className="animate-fade-in">
<h2 className="animate-fade-in animation-delay-200">
<p className="animate-fade-in animation-delay-400">

// Feature cards
{features.map((feature, index) => (
  <div 
    className="animate-fade-in-up hover:-translate-y-2"
    style={{ animationDelay: `${index * 150}ms` }}
  >
))}
```

### Business Tools
```jsx
// Each tool card
<div className="group hover:-translate-y-2 animate-fade-in-up animation-delay-{200|400|600|800}">
  <div className="group-hover:scale-110 group-hover:rotate-3">
    {/* Icon */}
  </div>
  <h3 className="group-hover:text-purple-400">
    {/* Title */}
  </h3>
</div>
```

### Team Section
```jsx
// Team cards
<div className="group animate-fade-in hover:-translate-y-2">
  <Image className="group-hover:scale-110" />
  <h3 className="group-hover:text-purple-400" />
</div>
```

### FAQ Section
```jsx
// FAQ items
<details 
  className="animate-fade-in-up hover:bg-[#1E1E1E]/30"
  style={{ animationDelay: `${index * 100}ms` }}
>
  <summary className="hover:pl-8 transition-all">
    <div className="group-hover:scale-110 group-hover:border-purple-500">
      {/* Icon */}
    </div>
  </summary>
</details>
```

---

## 🎭 Animation Timing Guide

### Staggered Animations
```jsx
// Method 1: Using animation-delay classes
<div className="animate-fade-in animation-delay-200" />
<div className="animate-fade-in animation-delay-400" />
<div className="animate-fade-in animation-delay-600" />

// Method 2: Using inline styles (for loops)
{items.map((item, index) => (
  <div 
    className="animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  />
))}
```

### Hover Transitions
```jsx
// Fast (200ms) - Small elements, icons
className="transition-all duration-200"

// Medium (300ms) - Buttons, cards (DEFAULT)
className="transition-all duration-300"

// Slow (500-700ms) - Images, large elements
className="transition-transform duration-700"
```

---

## 🎨 Color Transitions

### Hover Color Patterns
```jsx
// Text color
className="hover:text-purple-400 transition-colors"

// Background color
className="hover:bg-purple-600 transition-colors"

// Border color
className="hover:border-purple-500 transition-colors"

// Multiple properties
className="hover:text-purple-400 hover:border-purple-500 transition-all"
```

---

## 📱 Mobile Responsiveness

### Mobile Menu Animation
```jsx
<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  <svg className={`transition-transform duration-300 ${
    mobileMenuOpen ? 'rotate-90' : ''
  }`} />
</button>

{mobileMenuOpen && (
  <div className="animate-slide-in-bottom">
    {/* Menu content */}
  </div>
)}
```

### Responsive Hover States
```jsx
// Desktop only hover effects
className="md:hover:scale-105 transition-all"

// Touch-friendly (no hover on mobile)
className="active:scale-95 md:hover:scale-105 transition-all"
```

---

## 🚀 Performance Tips

### DO ✅
- Use `transform` and `opacity` for animations
- Keep animation duration under 1 second
- Use `will-change` sparingly for complex animations
- Combine multiple transitions with `transition-all`

### DON'T ❌
- Animate `width`, `height`, `top`, `left` (causes reflow)
- Use too many simultaneous animations
- Animate on scroll without throttling
- Forget to test on mobile devices

---

## 🎯 Common Patterns

### Card Hover Effect
```jsx
<div className="group hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
  <div className="group-hover:scale-110 transition-transform">
    {/* Icon or image */}
  </div>
  <h3 className="group-hover:text-purple-400 transition-colors">
    {/* Title */}
  </h3>
</div>
```

### Button with Icon
```jsx
<button className="group hover:scale-105 transition-all duration-300">
  <svg className="group-hover:animate-bounce" />
  <span>Click me</span>
</button>
```

### Image Zoom on Hover
```jsx
<div className="overflow-hidden rounded-lg">
  <Image className="hover:scale-110 transition-transform duration-700" />
</div>
```

### Staggered List
```jsx
{items.map((item, i) => (
  <div 
    key={i}
    className="animate-fade-in-up"
    style={{ animationDelay: `${i * 100}ms` }}
  >
    {item}
  </div>
))}
```

---

## 🔧 Customization

### Adding New Animations

1. Add keyframes to `app/globals.css`:
```css
@keyframes my-animation {
  from { /* start state */ }
  to { /* end state */ }
}
```

2. Create utility class:
```css
.animate-my-animation {
  animation: my-animation 0.6s ease-out forwards;
}
```

3. Use in components:
```jsx
<div className="animate-my-animation" />
```

### Adjusting Timing
```jsx
// Faster
className="animate-fade-in duration-300"

// Slower
className="animate-fade-in duration-1000"

// Custom delay
style={{ animationDelay: '500ms' }}
```

---

## 📊 Animation Performance Checklist

- ✅ All animations use GPU-accelerated properties
- ✅ No layout thrashing (width/height animations)
- ✅ Smooth 60fps on mobile devices
- ✅ Respects `prefers-reduced-motion`
- ✅ No janky scroll animations
- ✅ Proper z-index management
- ✅ Optimized for touch devices

---

## 🎬 Testing Animations

### Browser DevTools
1. Open Chrome DevTools
2. Go to "More tools" → "Rendering"
3. Enable "Paint flashing" to see repaints
4. Enable "FPS meter" to monitor performance

### Mobile Testing
1. Test on actual devices
2. Check animation smoothness
3. Verify touch interactions
4. Test on slower devices

---

## 📝 Notes

- All animations are subtle and professional
- Timing follows Material Design guidelines
- Colors match the brand palette
- Accessibility is maintained
- Performance optimized for all devices
