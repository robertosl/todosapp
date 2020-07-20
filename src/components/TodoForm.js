import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends React.Component{

    onChangeText(text){
        this.props.dispatchSetTodoText(text);
    }

    onPress(){
        const { todo } = this.props;
        if( todo.id ){
            this.props.dispatchUpdateTodo(todo);
        }else{
            const { text } = todo;
            this.props.dispatchAddTodo(text);
        }
    }

    render(){
        const {text, id} = this.props.todo;
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText = { text => this.onChangeText(text) }
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=> this.onPress()}
                        title={id ? "SAVE" : "ADD"}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 8,
        borderBottomWidth: 3,
        borderBottomColor: '#000',
        marginLeft: 15,
        marginRight: 15,
    },
    buttonContainer:{
        flex: 4,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
    }
});

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

const mapDispatchTopProps = {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
}

export default connect(mapStateToProps, mapDispatchTopProps)(TodoForm);
