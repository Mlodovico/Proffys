import React, { useState } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

export default function TeacherForm() {
    const [schedule, setSchedule] = useState([
        { week_day: 0, from: "8:00 AM", to: "4:00 PM" },
    ]);

    function addNewScheduleItem() {
        setSchedule([
            ...schedule,
            { week_day: 0, from: "", to: ""}
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
             title="Que incrivel que voce quer dar aulas."
             description="O primeiro passo e preencher esse formulario"
             />

             <main>
                 <fieldset>
                     <legend>Seus dados</legend>

                     <Input name="name" label="Nome completo" />
                     <Input name="avatar" label="Avatar" />
                     <Input name="whatsapp" label="WhatsApp" />
                     <TextArea name="bio" label="Biografia" />
                 </fieldset>

                 <fieldset>
                     <legend>Sobre a aula</legend>

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
                     <Input name="cost" label="Custo da sua hora por aula" />
                 </fieldset>

                 <fieldset>
                    <legend>
                         Hoararios Disponiveis
                         <button type="button" onClick={() => addNewScheduleItem()}>+ Novo horario</button> 
                    </legend>

                    {schedule.map(item => {
                        return (
                        <div key={item.week_day} className="schedule-item">
                        <Select 
                            name="subject" 
                            label="Materia"
                            options={[
                                {value: '0', label: 'Segunda-feira'},
                                {value: '1', label: 'Terca-feira'},
                                {value: '2', label: 'Quarta-feira'},
                                {value: '3', label: 'Quinta-feira'},
                                {value: '4', label: 'Sexta-feira'},
                                {value: '5', label: 'Sabado'},
                            ]}
                        />
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Ate" type="time" />
                     </div>)
                    })}
                 </fieldset>
                 <footer>
                     <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                     </p>
                     <button type="button">
                         Salvar cadastro
                     </button>
                 </footer>
             </main>
        </div>
    )
}