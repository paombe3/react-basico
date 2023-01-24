import React from 'react';
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-Text">Cargando TODOs...</p>
      <span className="Loading-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };