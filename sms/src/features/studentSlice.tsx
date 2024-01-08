import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

interface Student {
    id: String; 
    name: String; 
    course: String; 
}

const studentSlice = createSlice({ 
    name: 'students', 
    initialState: [] as Student[], 
    reducers: {
        addStudent: (state, action: PayloadAction<Student>) => {
            state.push(action.payload); 
        }
    }
})

export const { addStudent } = studentSlice.actions;
export const selectStudents = (state: { students : Student[] }) => state.students;
export default studentSlice.reducer;