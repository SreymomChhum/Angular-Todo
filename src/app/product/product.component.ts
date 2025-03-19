import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],  // Fixed styleUrls (plural)
  imports: [CommonModule,MatAutocompleteModule, ReactiveFormsModule],
})
export class ProductComponent {
  title = 'Todo List';
  todoList: TodoItem[] = [];
  newTask: string = '';

  @ViewChild('todoText') todoInputRef!: ElementRef<HTMLInputElement>;

  addTask(text: string): void {
    if (text.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: text.trim(),
        completed: false,
      };
      this.todoList.push(newTodoItem);
      this.todoInputRef.nativeElement.value = '';
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }

  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  }
}
