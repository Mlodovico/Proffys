//IMPORTS
import React from 'react';
import Input from '../../components/Input';

//STYLES

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'

import './styles.css';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses sao os Proffys disponiveis">
                <form id="search-teachers">
                    <Input name="subject" label="Materia" />
                    <Input name="week_day" label="Dia da semana" />
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