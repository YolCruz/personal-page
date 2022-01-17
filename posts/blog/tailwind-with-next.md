---
title: "Using TailwindCSS with Next JS"
date: "2022-01-13"
summary: "Next JS provides a very handy feature for using scoped CSS. However, using packages like Tailwind, how can you make those two features work?"
---

## TL;DR

```html
<div className="{`${styles.main_div}" w-screen h-screen`}>
  <h1 className="{`${styles.first_title}" my-4 text-red-600`}>
    Next style component with Tailwind classes
  </h1>
</div>
```

## Traditional CSS styling vs Tailwind styling

Tailwind provides a very easy but powerful way of writing beautiful components.

The class based library allows you to give style to your components, without ever leaving your HTML, which is very handy since, in large apps, navigating through different CSS files can be difficult, especially when each component has non-intuitive classes names.

Consider the following example:

```html
<body>
  <h1 className="title">Normal CSS styling</h1>
  <div className="content">
    <p className="p1">
      Styling a component the usual way can be considered a best practice
    </p>
  </div>
</body>
```

In it, we don&apos;t know what styles the components have until we look at the css to find out:

```css
body {
  width: 100vw;
  height: 100vh;
  background-color: grey;
}

.title {
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
}

.content {
  color: white;
  font-size: 1.125rem;
}

.content > p {
  margin-bottom: 1rem;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

.p1 {
  text-decoration-color: blue;
}

.p2 {
  text-decoration-color: red;
}

.p3 {
  text-decoration-color: green;
}
```

And even then, we have to compare the HTML with the CSS multiple times, to find the class name of the element in the HTML, with the corresponding style in the CSS file.

On the other hand, Tailwind lets us style the element we want from within the HTML, taking advantage of the class names the element has. Take a look at the same file, but with Tailwind styling:

```html
<body className="w-screen h-screen bg-gray-500">
  <h1 className="text-white text-5xl mb-8">Normal CSS styling</h1>
  <div className="text-white text-lg">
    <p
      className="mb-4 underline decoration-2 underline-offset-2 decoration-blue-500"
    >
      Styling a component the usual way can be considered a best practice
    </p>
  </div>
</body>
```

It may look a little uggly having all those class names. But you can tell right away what is happening with each component.

## Next JS style components

Next has a very neat feature for scope styling, which is to create a document that has in its name `.module.css`, which it’s also compatible with SASS or SCSS files. You simply have to import the file like this:

```javascript
import styles from "styles/main-component.module.css";
```

Now you can use this stylesheet in any component you want.

```html
<body className="{styles.body}">
  <h1 className="{styles.title1}">Normal CSS styling</h1>
  <div className="{styles.content}">
    <p className="{styles.p1}">
      Styling a component the usual way can be considered a best practice
    </p>
  </div>
</body>
```

The perks of doing this are that if you are using multiple HTML components, you can use the same class name for them without worrying about mixing their styles or having to come up with tons of different names for every single one of your components.

## Next CSS components + Tailwind

For all the good things about tailwind, there are times where you will find yourself in the need to write more complex CSS. Maybe you’re writing a complex keyframes animation and extending Tailwind’s is not good enough for you. Or you want to use logical styling like a “calc()” function. No matter the case, you can still use tailwind AND use a CSS module without having to resort to things like another library. Simply use javascript string formatting syntax with both the CSS module and any other Tailwind class:

```html
<body className={`${styles.body} w-screen h-screen bg-gray-500`}>
  <h1 className={`${styles.title}text-white text-5xl mb-8`}>
    Normal CSS styling
  </h1>
  <div className="text-white text-lg">
    <p
      className={`${styles.p1} mb-4 underline decoration-2 underline-offset-2 decoration-blue-500`}
    >
      Styling a component the usual way can be considered a best practice
    </p>
  </div>
</body>
```

This is great because it not only allows you to combine Tailwind classes and CSS modules. It also allows you to easily add, remove or change a class given a component’s state.
