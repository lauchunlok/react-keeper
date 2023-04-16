# React

## App (props) flow

1. addNewNote -> AddNote

   1. AddNote as a child component can return the new note being created and able to modify parent State

2. deleteNote -> Note
   1. Individual note can delete itself returning the deleted note id and change parent State
