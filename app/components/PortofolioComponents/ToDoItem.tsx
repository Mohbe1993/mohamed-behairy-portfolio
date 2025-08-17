'use client'

import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React, { useRef, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

type ToDoItemProps = {
    title: string;
    setTitle: (newTitle: string) => void;
    onDelete: () => void;
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ToDoItem({ title, onDelete }: ToDoItemProps) {
    const [open, setOpen] = React.useState(false);
    const [readOnlyDetails, setReadOnlyDetails] = React.useState(true);
    const [detailsFieldValue, setDetailsFieldValue] = useState("");
    const detailsInputRef = useRef<HTMLInputElement | null>(null);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAgree = () => {
        setOpen(false);
        onDelete();
    };

    return (
        <div className='mb-1'>
            <Typography variant="h5">
                {title}
            </Typography>

            <TextField
                id="outlined-multiline-static"
                label="Details"
                multiline
                rows={4}
                value={detailsFieldValue}



                onChange={(e) => setDetailsFieldValue(e.target.value)}
                sx={{
                    background: 'rgb(85, 85, 199)',

                    width: '100%',
                    "& .MuiOutlinedInput-root fieldset": { border: "none" }
                }}
                inputRef={detailsInputRef}
                slotProps={{
                    input: {
                        readOnly: readOnlyDetails,
                    },
                }}
            />

            <Container sx={{ display: 'flex', gap: "1rem" }}>
                <Button variant="outlined" onClick={() => {
                    setReadOnlyDetails(false)
                    setTimeout(() => {
                        detailsInputRef.current?.focus();
                    }, 0);

                }} sx={{ color: 'blue', border: '1px solid blue' }}>
                    <EditIcon />
                </Button>

                <Button variant="outlined" onClick={handleClickOpen} sx={{ color: 'red', border: '1px solid red' }}>
                    <DeleteIcon />
                </Button>
            </Container>

            <Dialog
                open={open}
                slots={{ transition: Transition }}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>{"Be Careful !!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleCloseAgree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ToDoItem;
