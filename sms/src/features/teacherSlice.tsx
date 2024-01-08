import {createSlice, PayloadAction} from "@reduxjs/toolkit"; 

interface Teacher {
    id: String; 
    name: String; 
    department: String; 
}

const teacherSlice = createSlice({ 
    name: 'teachers', 
    initialState: [] as Teacher[], 
    reducers: {
        addTeacher: (state, action: PayloadAction<Teacher>) => {
            state.push(action.payload); 
        }
    },
})

export const { addTeacher } = teacherSlice.actions;
export const selectTeachers = (state: { teachers: Teacher[] }) => state.teachers;
export default teacherSlice.reducer;