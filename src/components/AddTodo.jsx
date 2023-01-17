import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "請輸入訊息",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="新增事項..." value={content} onChange={(e) => setContent(e.target.value)} />
        <Button colorScheme="purple" px="8" type="submit">
          新增
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
