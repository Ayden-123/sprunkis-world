import React from 'react';

export default function CustomHead() {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'bussiness';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
				}}
			/>
		</>
	);
}
