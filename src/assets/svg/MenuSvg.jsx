const MenuSvg = ({ openNavigation }) => {
	return (
		<svg
			className="overflow-visible"
			width="20"
			height="12"
			// viewBox="min-x min-y width height min-x=0 et min-y=0 : le coin supérieur gauche"
			viewBox="0 0 20 12"
		>
			{/* //rect définit un rectangle. */}
			<rect
				// applique des classes CSS pour une transition fluide et définit l'origine de transformation au centre.
				className="transition-all origin-center"
				// y définit la position verticale du rectangle. Si openNavigation est vrai, y est défini à "5", sinon à "0".
				y={openNavigation ? '5' : '0'}
				width="20"
				height="2"
				//rx="1" arrondit les coins du rectangle.
				rx="1"
				fill="white"
				// transform applique une rotation au rectangle. Si openNavigation est vrai, le rectangle est tourné de 45 degrés, sinon il n'est pas tourné.
				transform={`rotate(${openNavigation ? '45' : '0'})`}
			/>

			<rect
				className="transition-all origin-center"
				y={openNavigation ? '5' : '10'}
				width="20"
				height="2"
				rx="1"
				fill="white"
				transform={`rotate(${openNavigation ? '-45' : '0'})`}
			/>
		</svg>
	);
};

export default MenuSvg;
