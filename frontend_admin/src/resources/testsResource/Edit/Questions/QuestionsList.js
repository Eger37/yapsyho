import React from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MUIIconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Datagrid, TextField, FunctionField, ReferenceManyField} from 'react-admin';

import {ScrollingWrapperInCard} from '../../../../components/ScrollingWrapper';

// import { StepsPopover } from './StepsPopover';
// import { EditArticle } from './EditArticle';
import {AddQuestion} from './AddQuestion';
import {EditQuestion} from "./EditQuestion";
// import { EditInDialogButton } from "@react-admin/ra-form-layout";


export const QuestionsDatagrid = (props) => {
    console.log("QuestionsDatagrid")
    console.log(props)

    if (!props.ids || !props.ids.length) {
        return <AddQuestion test={props.test}/>

    }

    return (
        <Paper variant="outlined">
            <h2 align={"center"}>Questions</h2>
            <ScrollingWrapperInCard>
                <Datagrid {...props}>
                    <FunctionField source="edit" render={record => <EditQuestion question={record}/>}/>
                    <TextField sortable={false} source="sequential_number" label="Sequential number"/>
                    <TextField sortable={false} source="text" label="Question"/>

                </Datagrid>

            </ScrollingWrapperInCard>
            <Box p={1} display="flex" alignItems="center" justifyContent="space-between" boxSizing="border-box">
                <Box display="flex">
                    <Box display="flex" alignItems="flex-end">
                        <AddQuestion test={props.test}/>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}


export const QuestionsField = (props) => {
    return (
        <ReferenceManyField reference={"question"} target="test_id"
                            sort={{field: "sequential_number", order: "ASC"}} {...props}>
            <QuestionsDatagrid test={props.record}/>
        </ReferenceManyField>
    );
};


QuestionsField.defaultProps = {
    addLabel: true,
    className: 'ra-field-datagrid'
};
