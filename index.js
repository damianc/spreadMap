function spreadMap(mapper) {
	return this.reduce((acc, curr, idx) => {
		const mapped = mapper(curr, idx, this);
		
		if (!Array.isArray(mapped)) {
			const type = typeof mapped;
			const errorMessage = [
			 'the spreadMap() method',
			 'must return an array:',
			 type,
			 'returned'
			];
			
			if (type === 'object') {
				const c = mapped.constructor.name;
				if (c !== 'Object') {
				 errorMessage.push(
					 '(an instance of ' + c + ')'
				 );
				}
			}
			
			throw new Error(
				errorMessage.join(' ')
			);
		}
		
		return [
		 ...acc,
		 ...mapped
		];
	}, []);
}

Object.defineProperty(
	Array.prototype, 'spreadMap', {
		value: spreadMap
	}
);
