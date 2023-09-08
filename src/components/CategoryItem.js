import React from 'react'
import { Link } from "react-router-dom";

function Category({category}) {
	return (
		<div>
		<Link to={`/browse/${category.id}`}>
		<div
  style={{ background: category.color }}
  className="rounded-md h-[200px] w-[200px] before:pt-[100%] before:block relative"
>
			<div className="absolute inset-0 overflow-hidden">
				<h3 className="p-4 text-2xl	tracking-tighter font-semibold">
					{category.title}
				</h3>
				<img src={category.cover}
				     className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"/>
			</div>
		</div>
		</Link>
		</div>
	)
}

export default Category
