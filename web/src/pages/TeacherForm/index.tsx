import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

export default function TeacherForm() {
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
                         <button type="button">+ Novo horario</button> 
                    </legend>
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