import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';


const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() { 

  const todos = useTodoState(); //TodoContext에서 가지고온 커스텀 훅을 todos 변수에 담는다

  return (
    <TodoListBlock> 
      {todos.map(todo => //todos 변수에 담긴 객체 리스트를 전부 맵함수로 반복하여 TodoItem 생성한다
      <TodoItem
      key={todo.id} //고유키는 id로 생성
      id={todo.id}
      text={todo.text}
      done={todo.done}
      >
      </TodoItem>)}
    </TodoListBlock>
  );
}

export default TodoList;