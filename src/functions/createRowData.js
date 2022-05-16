import faker from "faker";
import axios from 'axios';


async function createFakeRow(index) {
	var response = await axios.get('https://jsonplaceholder.typicode.com/users/' + index)
	const result = response.data;
	return {
		id: result.id,
		animals: 'https://via.placeholder.com/600/' + index,
		firstName: result.name.split(" ")[0],
		lastName: result.name.split(" ")[1],
		date: faker.date.past().toLocaleDateString(),
		companyName: result.company.name
	};
}

export default async function createRowData(count) {
	return await createFakeRow(count);
}
