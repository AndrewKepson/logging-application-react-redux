import React from 'react'

const Preloader = () => {
	return (
		<>
			<div className='progress blue lighten-4'>
				<div className='indeterminate blue'></div>
			</div>
			<p>
				Since this application uses a db.json server it must be downloaded and
				run locally to read and write data:{' '}
				<a
					href='https://github.com/AndrewKepson/logging-application-react-redux'
					rel='noopener noreferrer nofollow'
					target='_blank'>
					GitHub Repository
				</a>
			</p>
		</>
	)
}

export default Preloader
