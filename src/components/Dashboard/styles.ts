import styled from "styled-components";

export const PanelEmpty = styled.div`
	svg{
		color:var(--gray-300);
		font-size:3rem;
	}
	h3,p{
		color:var(--gray-300);
		text-align:center;
	}
	h3 {
		font-weight:900;
		font-size:1.2rem;
	}
	p {
		font-weight:400;
	}
	margin:2rem auto;
	display:flex;
	gap:0.5rem;
	flex-direction:column;
	justify-content:center;
	align-items:center;

`

export const ContentDashboard = styled.div`
	.col {
		position:relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 80px;
		align-items: center;
	}

	.field,
	.panel {
		max-width: 736px;
		width: 95%;
	}

	.field {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		height: 54px;
		margin: -30px auto;
		/* flex-wrap: wrap; */
	}

	.field input,
	.field button {
		height: 100%;
	}

	.field button {
		width: 92px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		border: none;
		color: var(--white);
		background: var(--blue-dark);
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.field button:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}

	.field button:not(:disabled):hover {
		background: var(--blue);
	}

	.field button svg {
		color: white !important;
	}

	.field input {
		/* height:100%; */
		padding: 16px;
		max-width: 638px;
		width: 100%;
		border: none;
		background: var(--gray-500);
		border: 1px solid var(--gray-700);
		padding: 16px;
		border-radius: 8px;
		color: var(--white);
	}

	.field input:focus {
		outline: 1px solid var(--blue);
	}


	.panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.categories {
			width: 100%;
			height: 25px;
			display: flex;
			justify-content: space-between;
			/* padding: 0 10px; */
			align-items: center !important;
			flex-wrap: wrap;
			/* height: auto; */
			padding-bottom: 2.5rem;
			border-bottom: 1px solid var(--gray-500);


			span {
				display: flex;
				align-items: center;
				justify-content: center;

				p.created{
					color: var(--blue);
				}

				p.completed {
					color: var(--purple);
				}

				.number {
					background: var(--gray-500);
					height: 100%;
					padding: 0.2rem 0.5rem;
					color: var(--white);
					border-radius: 10px;
					margin-left: 8px;
				}
			}

		}
	}

	/* my tasks */

	.listTasks {
		display: flex;
		width: 100%;
		flex-direction: column;
		gap: 0.5rem;
	}

	.btnDelete {
		padding: 0.5rem;
		border: none;
		border-radius: 6px;
		display: flex;
		background:transparent;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		svg {
			color: var(--gray-300);
		}
		&:hover {
			svg {
				color:var(--danger);
			}
			background: var(--gray-400);
		}
	}


	.task {
		display: flex;
		width: 100%;
		max-width: 736px;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 1rem;
		margin:1rem 0 0;
		border-radius:8px;
		align-items: center;
		height: 60px;
		background: var(--gray-500);
		/* checkbox */
		.checkField {
			display: block;
			position: relative;
			input{
				outline: none;
				width: 0;
				height: 0;
				cursor: pointer;
			}
			input:checked~.checkHere {
				background: var(--purple);
				border-color: var(--purple);
			}
			input:checked~.checkHere:after {
				display: block;
			}
			.checkHere {
				position: absolute;
				top: 0;
				left: 0;
				width: 18px;
				height: 18px;
				background-color: transparent;
				border: 2px solid var(--blue);
				border-radius: 50%;
				&:hover{
					border:2px solid var(--blue-dark);
					background:var(--blue-dark);
					filter:opacity(0.6);
				}
			}
			.checkHere:after {
				content: "";
				position: absolute;
				display: none;
				/* left: 6px;
				top: 3px; */
				top: 50%;
				left: 35%;
				width: 3px;
				height: 6px;
				border: solid white;
				border-width: 0 2px 2px 0;
				transform: rotate(45deg) translate(-50%, -50%);
				background-color: var(--purple);
			}
		}
	}

	/* content task  */

	.wrapper {
		display: flex;
		flex:1;
		gap:2rem;
		flex-direction: row;
		align-items:center;
	}

	.task .content {
		color: #fff;
	}

	.task .risk {
		color: var(--gray-300);
		text-decoration: line-through;
	}

	.risk {
		text-decoration: line-through;
}
`