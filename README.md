# To-Do List App

A sleek, modern to-do list application built with vanilla JavaScript, Tailwind CSS, and local storage persistence.

## Features

- ✅ **Add Tasks** - Create new to-do items with text, date, and tag
- 🏷️ **Tag System** - Organize tasks with three tag categories: assignment, travel, shopping
- 🔍 **Filter by Tags** - Click the filter button to cycle through tags and view filtered tasks
- 💾 **Local Storage** - All todos and username are automatically saved to your browser
- 👤 **Personalized Greeting** - Save your username for a personalized welcome message
- ✨ **Mark Complete** - Click any task to mark it as done with a smooth animation
- 🗑️ **Clear All** - Remove all tasks with the clear button
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## File Structure

```
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # Custom styles and CSS variables
├── js/
│   └── script.js       # Core application logic
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Tailwind CSS framework
- **JavaScript (Vanilla)** - No frameworks, pure ES6+
- **Tailwind CSS 4** - Utility-first CSS framework
- **Google Fonts** - Playpen Sans and Zain typefaces
- **Material Symbols** - Icon library from Google
- **LocalStorage API** - Client-side data persistence

## How to Use

### 1. Add Your Username

Enter your name in the username input field at the top. It will be saved automatically.

### 2. Create a Task

1. Type your task in the "new task, event, grocery..." input field
2. Select a due date using the date picker
3. Click the **Tag** button to choose a category (assignment, travel, or shopping)
4. Click the **Add** button to create your task

### 3. View Tasks

All your tasks appear in the to-do list section with their text, tag, and due date.

### 4. Filter Tasks

Click the **Filter** button to cycle through available tags. It will show:

- All tasks (initial state)
- Tasks with the first tag
- Tasks with the second tag
- And so on...

### 5. Mark Tasks Complete

Click any task in the list to mark it as complete. The task will fade out and disappear after 1 second.

### 6. Clear All

Click the **Clear** button to remove all tasks from your list (they will also be removed from storage).

## Color Scheme

- **Background**: Dark gray/black (#030712)
- **Text**: Light gray (#d1d5db)
- **Primary Accent**: Sky blue
- **Buttons**:
  - Green: Add task
  - Yellow: Tag selection
  - Blue: Filter
  - Red: Clear all

## Data Storage

The app uses browser LocalStorage to persist:

- **todos** - Array of all task objects with text, date, and tag
- **username** - User's entered username

Each task object contains:

```javascript
{
  text: "Task description",
  date: "2025-11-15",
  tag: "assignment" | "travel" | "shopping"
}
```

## Browser Compatibility

Works on all modern browsers that support:

- ES6+ JavaScript
- LocalStorage API
- CSS Grid and Flexbox
- HTML5 input types (date)

## Future Enhancements

- Edit existing tasks
- Priority levels
- Task categories beyond tags
- Due date reminders
- Dark/Light theme toggle
- Export/Import functionality
- Recurring tasks

## Author

© 2025 **Axel**

---

Enjoy organizing your tasks! 🚀
