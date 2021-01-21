//IMPORTS
import React from 'react';
import Input from '../../components/Input';

//STYLES

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem'

import './styles.css';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses sao os Proffys disponiveis">
                <form id="search-teachers">
                <Select 
                     name="subject" 
                     label="Materia"
                     options={[
                         {value: 'Matematica', label: 'Matematica'},
                         {value: 'Geografia', label: 'Geografia'},
                         {value: 'Historia', label: 'Historia'},
                         {value: 'Biologia', label: 'Biologia'},
                         {value: 'Informatica', label: 'Informatica'},
                         {value: 'Fisica', label: 'Fisica'},
                         {value: 'Portugues', label: 'Portugues'},
                     ]}
                     />
                     <Select 
                     name="week_day" 
                     label="Dia da semana"
                     options={[
                         {value: '0', label: 'Segunda-feira'},
                         {value: '1', label: 'Terca-feira'},
                         {value: '2', label: 'Quarta-feira'},
                         {value: '3', label: 'Quinta-feira'},
                         {value: '4', label: 'Sexta-feira'},
                         {value: '5', label: 'Sabado'},
                     ]}
                     />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}