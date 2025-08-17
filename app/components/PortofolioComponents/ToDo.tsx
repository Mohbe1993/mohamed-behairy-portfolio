'use client'

import { Box, Button, Card, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ToDoItem from './ToDoItem';

type Todo = {
    id: number;
    title: string;
};

function ToDo() {
    const [textFieldValue, setTextFieldValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = () => {
        if (!textFieldValue.trim()) return;
        setTodos(prev => [...prev, { id: Date.now(), title: textFieldValue }]);
        setTextFieldValue("");
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const handleUpdateTodo = (id: number, newTitle: string) => {
        setTodos(prev =>
            prev.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo)
        );
    };

    return (

        <Card sx={{
            marginTop: '1rem',
            maxWidth: '90vw',

            height: {
                xs: 'calc(100vh - 10rem)',
                md: 'calc(100vh - 10rem)',
                lg: 'calc(100vh - 5rem)',
            },
            overflowY: 'scroll',
            display: 'flex',
            alignItems: "center",
            flexDirection: "column",
            gap: '1rem'
        }}>
            <Box
                sx={{

                    m: 1,
                    width: {
                        xs: '80vw',
                        md: '80vw',
                        lg: '60vw',
                    }, height: {
                        xs: 'calc(100vh - 10rem)',
                        md: 'calc(100vh - 10rem)',
                        lg: 'calc(100vh - 5rem)',
                    },

                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "column",
                    gap: '1rem',
                   
                }}
            >
                <Typography variant="h5" sx={{ background: 'rgb(85, 85, 171)', width: "90%", textAlign: 'center', color: "white" }}>
                    What needs to be done?
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Write your task here"
                    variant="outlined"
                    sx={{ width: "80%" }}
                    value={textFieldValue}
                    onChange={(event) => setTextFieldValue(event.target.value)}
                />

                <Button
                    variant="contained"
                    endIcon={<AddIcon />}
                    onClick={handleAddTodo}
                >
                    Add
                </Button>

                <Box
                    sx={{
                        m: 1,
                        width: "75%",
                        display: 'flex',
                        flexDirection: "column",
                        gap: '1rem',
                    }}
                >
                    {todos.map(todo => (
                        <ToDoItem
                            key={todo.id}
                            title={todo.title}
                            setTitle={(newTitle) => handleUpdateTodo(todo.id, newTitle)}
                            onDelete={() => handleDeleteTodo(todo.id)}

                        />
                    ))}
                </Box>
            </Box>

        </Card>



    );
}

export default ToDo;
