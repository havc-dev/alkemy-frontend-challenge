import React from "react";

const InputGroup = ({ labelText, inputType, inputId, ariaDescription, noticeId, noticeText }) => {
	return (
		<div className='mb-3'>
			<label for='exampleInputEmail1' className='form-label'>
				{labelText}
			</label>
			<input
				type={inputType}
				className='form-control'
				id={inputId}
				aria-describedby={ariaDescription}
			/>
			{noticeId ? (
				<div id={noticeId} className='form-text'>
					{noticeText}
				</div>
			) : null}
		</div>
	);
};

export default InputGroup;
