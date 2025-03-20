import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

export interface TodoItem {
  id: number;
  name: string;
  status: boolean;
}

const Items: TodoItem[] = [
  { id: 1, name: 'Item1', status: true },
  { id: 2, name: 'Item2', status: true },
  { id: 3, name: 'Item3', status: false }
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, MatAutocompleteModule, ReactiveFormsModule, MatTableModule, FormsModule],
})
export class ProductComponent {
  title = 'Todo List';
  todoList: TodoItem[] = Items;  // Start with Items
  newTask: string = '';  // Task input value
  dataSource = this.todoList;  // Bind dataSource to todoList
  displayedColumns: string[] = ['id', 'name', 'status', 'actions'];  // Columns to display

  // This variable stores the task that is being edited
  editingTask: TodoItem | null = null;

  @ViewChild('todoText') todoInputRef!: ElementRef<HTMLInputElement>;

  // Function to add or edit a task
  addOrEditTask(text: string): void {
    if (text.trim() !== '') {
      if (this.editingTask) {
        // If we're editing, update the task name in the todoList
        const updatedTask = this.todoList.find((task) => task.id === this.editingTask!.id);
        if (updatedTask) {
          updatedTask.name = text.trim();  // Update the task name
        }
        this.editingTask = null;  // Clear the task being edited after saving
      } else {
        // If we're adding a new task, create a new task
        const newTodoItem: TodoItem = {
          id: Date.now(),
          name: text.trim(),
          status: false,
        };
        this.todoList.push(newTodoItem);  // Add task to todoList
      }
      this.dataSource = [...this.todoList];  // Refresh dataSource (table)
      this.newTask = '';  // Clear the input field after saving
    }
  }

  // Function to delete a task
  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
    this.dataSource = [...this.todoList];  // Update dataSource after deletion
  }

  // Function to toggle the completion status of a task
  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.status = !todoItem.status;
      this.dataSource = [...this.todoList];  // Refresh the table to reflect changes
    }
  }

  // Function to start editing a task
  editTask(todoItem: TodoItem): void {
    this.editingTask = { ...todoItem };  // Make a copy of the task to edit
    this.newTask = todoItem.name;  // Pre-fill the input field with the task name
  }
}




// export class ProductComponent {
//   title = 'Todo List';
//   todoList: TodoItem[] = Items;  // Start with Items
//   newTask: string = '';
//   dataSource = this.todoList;  // Bind dataSource to todoList
//   displayedColumns: string[] = ['id', 'name', 'status'];  // Columns to display

//   editingTodoItem: TodoItem | null = null;

//   @ViewChild('todoText') todoInputRef!: ElementRef<HTMLInputElement>;

//   addTask(text: string): void {
//     if (text.trim() !== '') {
//       const newTodoItem: TodoItem = {
//         id: Date.now(),
//         name: text.trim(),
//         status: false,
//       };
//       this.todoList.push(newTodoItem);  // Add task to todoList
//       this.dataSource = [...this.todoList];  // Update dataSource (refresh the table)
//       this.todoInputRef.nativeElement.value = '';  // Clear input field
//     }
//   }

//   deleteTask(id: number): void {
//     this.todoList = this.todoList.filter((item) => item.id !== id);
//     this.dataSource = [...this.todoList];  // Update dataSource after deletion
//   }

//   toggleCompleted(id: number): void {
//     const todoItem = this.todoList.find((item) => item.id === id);
//     if (todoItem) {
//       todoItem.status = !todoItem.status;
//       this.dataSource = [...this.todoList];  // Refresh the table to reflect changes
//     }
//   }

//   // Start editing the task
//   editTask(todoItem: TodoItem): void {
//     this.editingTodoItem = { ...todoItem };
//   }

//   // Save the edited task
// saveEdit(): void {
//   if (this.editingTodoItem) {
//     const index = this.todoList.findIndex(item => item.id === this.editingTodoItem!.id);
//     if (index !== -1) {
//       this.todoList[index] = { ...this.editingTodoItem };  // Save the changes
//       this.dataSource = [...this.todoList];  // Refresh the table
//     }
//   }
//   this.editingTodoItem = null;  // Reset after saving
// }

//   cancelEdit(): void {
//     this.editingTodoItem = null;
//   }
// }






// import { CommonModule } from '@angular/common';
// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatTableModule } from '@angular/material/table';

// export interface TodoItem {
//   id: number;
//   name: string;
//   status: boolean;
// }

// const Items: TodoItem[] = [
//   { id: 1, name: 'Item1', status: true },
//   { id: 2, name: 'Item2', status: true },
//   { id: 3, name: 'Item3', status: false }
// ];

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css'],  // Fixed styleUrls (plural)
//   imports: [CommonModule, MatAutocompleteModule, ReactiveFormsModule, MatTableModule],
// })
// export class ProductComponent {
//   title = 'Todo List';
//   todoList: TodoItem[] = Items;  // Start with Items
//   newTask: string = '';
//   dataSource = this.todoList;  // Bind dataSource to todoList
//   displayedColumns: string[] = ['id', 'name', 'status'];  // Columns to display

//   @ViewChild('todoText') todoInputRef!: ElementRef<HTMLInputElement>;

//   addTask(text: string): void {
//     if (text.trim() !== '') {
//       const newTodoItem: TodoItem = {
//         id: Date.now(),
//         name: text.trim(),
//         status: false,
//       };
//       this.todoList.push(newTodoItem);  // Add task to todoList
//       this.dataSource = [...this.todoList];  // Update dataSource (refresh the table)
//       this.todoInputRef.nativeElement.value = '';  // Clear input field
//     }
//   }

//   deleteTask(id: number): void {
//     this.todoList = this.todoList.filter((item) => item.id !== id);
//     this.dataSource = [...this.todoList];  // Update dataSource after deletion
//   }

//   toggleCompleted(id: number): void {
//     const todoItem = this.todoList.find((item) => item.id === id);
//     if (todoItem) {
//       todoItem.status = !todoItem.status;
//       this.dataSource = [...this.todoList];  // Refresh the table to reflect changes
//     }
//   }
// }
