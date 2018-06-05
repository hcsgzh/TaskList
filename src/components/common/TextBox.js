import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Platform, Dimensions, Animated, Easing, TextInput} from 'react-native';
import MoveLabel from "./MoveLabel";
import MoveLine from "./MoveLine";
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');



export default class TextBox extends React.Component {


    static propTypes = {
        containerStyle: PropTypes.object,
        inputStyle: PropTypes.object,
        selectionColor: PropTypes.string,
        normalColor: PropTypes.string,
        headerHeight: PropTypes.number,
        fontSize: PropTypes.number,
        textHeight: PropTypes.number,
        onFocus: PropTypes.func,
        onChangeText: PropTypes.func,
        onBlur: PropTypes.func,
        autoCapitalize: PropTypes.string,

        value: PropTypes.string,
        placeholder: PropTypes.string,
        label: PropTypes.string,

        error: PropTypes.string,
    };

    static defaultProps = {
        headerHeight: 12,
        fontSize: 14,
        textHeight: 32,
        selectionColor: '#4d86f7',
        normalColor: '#bdc6cf',
        labelColor: '#86939e',
        value: '',
        placeholder: '',
        label: 'Label',
        error: null,
        autoCapitalize: 'sentences',
    };


    constructor(props) {
        super(props);

        const { value } = props;

        this.state = {
            boxActive: !!(value && value.length > 0),
            boxFocus: false,
            value: value
        };

        this._onFocus = this._onFocus.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }


    getRef = () => {
        return this.input || this.refs[this.props.textInputRef];
    };

    getRefHandler = () => {
        if (this.props.textInputRef) {
            if (typeof this.props.textInputRef === 'function') {
                return input => {
                    this.input = input;
                    this.props.textInputRef(input);
                };
            } else {
                return this.props.textInputRef;
            }
        } else {
            return input => this.input = input;
        }
    };

    focus() {
        this.getRef() && this.getRef().focus();
    }

    blur() {
        this.getRef() && this.getRef().blur();
    }

    clearText() {
        this.getRef() && this.getRef().clear();
    }

    _onFocus() {
        this.setState({
            boxActive: true,
            boxFocus: true,
        });

        this.props.onFocus && this.props.onFocus();
    }

    _onChangeText(text) {
        this.setState({
            value: text
        });

        this.props.onChangeText && this.props.onChangeText(text);
    }

    _onBlur() {
        this.setState({
            boxActive: !!(this.state.value && this.state.value.length > 0),
            boxFocus: false,
        });

        this.props.onBlur && this.props.onBlur();
    }

    render() {

        let {
            containerStyle,
            inputStyle,
            selectionColor,
            labelColor,
            normalColor,
            headerHeight,
            fontSize,
            textHeight,
            placeholder,
            label,
            onBlur,
            onChangeText,
            onFocus,
            value,
            autoCapitalize,
            ...attributes
        } = this.props;

        if (!this.state.boxActive) {
            placeholder = ' ';
        }

        return (
            <View style={[styles.container,

            ]}>
                <View style={[styles.innerContainer,
                    {
                        minHeight: headerHeight + textHeight,
                        //borderBottomColor: (this.state.boxFocus) ? selectionColor : normalColor,
                        borderBottomColor: normalColor,
                    },
                    containerStyle
                ]} >

                    <TextInput
                        ref={this.getRefHandler()}
                        onFocus={this._onFocus}
                        onChangeText={this._onChangeText}
                        onBlur={this._onBlur}
                        value={this.state.value}
                        placeholder={placeholder}
                        autoCapitalize={autoCapitalize}
                        //placeholder={(this.state.boxActive) ? placeholder : ''}

                        style={
                            [styles.input,
                                {
                                    marginTop: headerHeight,
                                    fontSize: fontSize,
                                    height: textHeight,
                                    minHeight: textHeight,
                                },
                                inputStyle
                            ]
                        }
                        {...attributes}
                    />
                    <MoveLabel
                        labelStyle={{
                            color: (this.state.boxFocus) ? selectionColor : labelColor,
                        }}
                        minimized={this.state.boxActive}
                        fontFull={fontSize}
                        headerHeight={headerHeight}
                        areaHeight={textHeight}
                    >{label}</MoveLabel>

                    <MoveLine minimized={this.state.boxFocus} selectionColor={selectionColor} />

                </View>
                {this.props.error ? <View style={styles.errorContainer}><Text style={styles.errorText}>{this.props.error}</Text></View> : null}
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex:1,
        marginBottom: 20,
    },

    innerContainer: {
        marginLeft: 0,
        marginRight: 0,
        minHeight: 40,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },

    errorContainer: {
        flex:1,
        marginTop: 5,
    },

    errorText: {
        fontSize: 14,
        color: 'red',
    },

    input: {
        marginTop: 15,
        flex: 1,
        //paddingTop: 0,
        //textAlignVertical: 'top',
        ...Platform.select({
            android: {
                minHeight: 46,
                //width: width - 0,
            },
            ios: {
                minHeight: 36,
                //width: width - 0,
            },
        }),
        // breaks tests - fix before release
        // Invariant Violation: Invalid undefined `width` of type `string`
        // supplied to `StyleSheet input`, expected `number`.
        // width: '100%',
        color: '#333333',
    },


});