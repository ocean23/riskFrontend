// Button.jsx
import React, { Component, PropTypes } from 'react';
import ProgressButton from 'react-progress-button';
import ReactTooltip from 'react-tooltip';
import { Form, ValidatedInput, Radio, RadioGroup } from 'react-bootstrap-validation';

class Copywriter extends Component {

	constructor(props) {
		super(props);
		this.handleValidSubmit = this.handleValidSubmit.bind(this);
		this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
		this.changeRentType = this.changeRentType.bind(this);
		this.state = {buttonState: '', rentType: ''};
	}

	render() {
		require('react-progress-button/react-progress-button.css');
		require('./copywriter.scss');
		return (
			<Form
				onValidSubmit={this.handleValidSubmit}
				onInvalidSubmit={this.handleInvalidSubmit}>
				<div className="row">
					<div className="container jumbotron-copywriter">
						<div className="row cp-box">
							<img className="img-responsive center-block" src={ G.baseHost + '/assets/image/partner.png' } />
						</div>
						<div className="row cpInput-box">
							<div className="col-sm-6 col-xs-12 pull-right">
								<img className="img-responsive center-block textStyle" src={ G.baseHost + '/assets/image/copywriter_text.png' } />
							</div>
							<div className="col-sm-6 col-lg-5 col-lg-offset-1 formbox">
								<div className="form-group">
									<label className="control-label col-xs-3" htmlFor="userName">我是:</label>
									<div className="row">
										<ReactTooltip id="tooltipRadio1">
											<span>我有房子，我想分享</span>
										</ReactTooltip>
										<label className="radio-inline col-xs-3" data-tip data-for="tooltipRadio1">
											<input name="radioGroup" id="houseSelf" value="self" type="radio" onChange={ this.changeRentType}/>个人房东
										</label>
										<ReactTooltip id="tooltipRadio2">
											<span>成为合伙人</span>
										</ReactTooltip>
										<label className="radio-inline col-xs-3" data-tip data-for="tooltipRadio2">
											<input name="radioGroup" id="houseOther" value="two" type="radio" onChange={ this.changeRentType}/>店小二
										</label>
										<ReactTooltip id="tooltipRadio3">
											<span>其他资源，寻求合作</span>
										</ReactTooltip>
										<label className="radio-inline col-xs-3" data-tip data-for="tooltipRadio3">
											<input name="radioGroup" id="houseParter" value="partner" type="radio" onChange={ this.changeRentType}/>合作伙伴
										</label>
									</div>
								</div>
								<ValidatedInput label="姓名" placeholder="姓名" id="userName" name="userName" type="text" validate="required" errorHelp={{required: '请输入您的姓名!'}} />
								<ValidatedInput label="邮箱" placeholder="邮箱" id="email" name="email" type="text" validate="required,isEmail" errorHelp={{required: '请输入您的邮箱!', isEmail: '无效邮箱!'}} />
								<ValidatedInput label="手机" placeholder="手机" id="mobile" name="mobile" type="text" validate="required" errorHelp={{required: '请输入您的手机!'}} />
								<div className="form-group">
									{ this.state.buttonState === 'success' &&
										<div className="col-xs-offset-5 col-xs-6">
											<span className="success-button">提交成功</span>
										</div>
									}
									<div className="col-xs-offset-3 col-xs-6">
										<ProgressButton type="submit" state={this.state.buttonState}>提交</ProgressButton>
									</div>
								</div>
							</div>
						</div>
						<div className="row foot-box">
							<p className="footer">备案号备案/许可证编号为：粤ICP备16042564号</p>
						</div>
					</div>
				</div>
			</Form>
		);
	}

	handleValidSubmit(values) {
		console.log('11111');
		console.log(values);
		const data = {
			rentType: this.state.rentType,
			name: values.userName,
			email: values.email,
			mobile: values.mobile
		};
		this.props.submitForm(data);
		this.setState({buttonState: 'loading'});
		setTimeout(function() {
			this.setState({buttonState: 'success'});
		}.bind(this), 2000);
	}

	handleInvalidSubmit(errors, values) {
		console.log('222222');
		this.setState({buttonState: 'error'});
		setTimeout(function() {
			this.setState({buttonState: ''});
		}.bind(this), 1000);
	}

	changeRentType(event) {
		this.setState({rentType: event.target.value});
	}
}

Copywriter.propTypes = {
	submitForm: PropTypes.func.isRequired
};

export default Copywriter;
