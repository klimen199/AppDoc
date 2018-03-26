import React from 'react'
import PropTypes from 'prop-types'
import {Upload as AntUpload} from 'antd'
import cn from 'classnames'
import Button from '../Button'
import './styles.css'
const { transliter } = require('transliter');

class Upload extends React.Component{

    handleChange = ({file,fileList}) => {
        let list =  fileList;
        try{
            let {name} = list[list.length - 1];
            list[list.length-1].name = transliter(name);
        }
        catch (e){
            this.setState({fileList});
            this.props.onChange({fileList});
            return;
        }
        this.setState({fileList:list});
        this.props.onChange({fileList:list});
    };

    render(){
        const {className, text} = this.props;
        const clName = cn("uploadContent", className);

        return (
            <AntUpload className={clName}
                       listType="text"
                       onChange={this.handleChange}
                       beforeUpload={this.beforeUpload}
                        >
                <Button btnText={text}
                        size='upload'
                        type='upload'
                        icon='upload'
                        iconSize={36}
                        svg
                        onClick={e => e.preventDefault()}
                        />
            </AntUpload>
        )
    }
}

Upload.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
};

Upload.defaultProps = {
    className: '',
    text: '',
};

export default Upload;