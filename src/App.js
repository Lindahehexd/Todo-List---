import { useState, useEffect } from "react";
import { VStack, IconButton, Heading, useColorMode, Flex } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <Flex>
        <Heading m={8} fontWeight="extrabold" size="2xl" color="alphablack.700">
          待辦事項清單
        </Heading>
        <IconButton icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />} isRound="true" size="lg" alignSelf="center" onClick={toggleColorMode}  />
      </Flex>

      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
};

export default App;
