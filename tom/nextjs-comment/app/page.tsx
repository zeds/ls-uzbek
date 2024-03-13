"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// typescript javascriptの型チェックをするもの

interface Comment {
	id: string;
	name: string;
	comment: string;
}

export default function Home() {
	const [inputName, setInputName] = useState("");
	const [inputComment, setInputComment] = useState("");
	const [dataComments, setDataComments] = useState<Comment[]>([]);
	const refName = useRef(null);
	const refComment = useRef(null);

	useEffect(() => {

		let x = 18
		console.log("x=", x)
		
		const comments = [
			{
				
				id: "4f550e71-9705-42bb-85d9-5826e08780f7",
				name: "佐藤",
				comment: "優しい二匹に癒されます",
			},
			{
				id: "0a2c283a-0af7-4089-a9b2-4f2b850b4244",
				name: "高橋",
				comment: "いつも一緒に居る人がそばに居れば安心するんだよねぇ🍀",
			},
			{
				id: "07ae9121-d2c1-4d1d-8034-57a57fc3bbdb",
				name: "山田",
				comment: "そうなのねー😢 家族だね😭",
			},
		];
		console.log("name=",comments[2].name)
		setDataComments(comments);
	}, []);


	const clickComment = () => {
		console.log(inputName);
		const obj = {
			id: "4f550e71-9705-42bb-85d9-5826e08780f7",
			name: inputName,
			comment: inputComment,
		};
		setDataComments([...dataComments, obj]);
	};

	return (
		<div className="w-full h-screen bg-red-200 p-5">
			<div className="w-full flex gap-3">
				<input
					value={inputName}
					onChange={(e) => setInputName(e.target.value)}
					type="text"
				/>

				<input
					value={inputComment}
					onChange={(e) => setInputComment(e.target.value)}
					type="text"
				/>
				<button onClick={clickComment} className="w-[100px] bg-gray-500">
					コメント
				</button>
			</div>

			{dataComments.map((item) => (
				<p key={item.id}>
					{item.name} {item.comment}
				</p>
			))}
		</div>
	);
}
