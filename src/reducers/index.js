import React, {useContext, useReducer} from 'react';
import {state, state2, state3} from '../contexts';
import main from '../helpers';
import redis from 'redis';
import io from 'socket.io-client';
import Web3 from 'web3';
import Paper from '../helpers/paper.class';

const ctx = React.createContext(null);
const SocketCtx = React.createContext(null);
const Web3Ctx = React.createContext(null);

const Reducer = (state, action) => {
	switch(action.name){
		case 'store':
			return {...state, data: action.payload}
		case 'logActivity':
			return {...state, status: {isAuth: action.payload.ok, load: action.payload.message}}
		case 'log out': 
			return {...state, status: {isAuth: false, load: null}}
		default: 
			return state
	}
}

const SocketReducer = (state, action) => {
	switch(action.name){
		case 'send edit data' : 
			return {...state, data: action.payload}
		default:
			return state;
	}
}

const Web3Reducer = (state, action) => {
	switch(action.name){
		case 'sending transaction' : 
			return {...state, sending: action.sending};
		default:
			return state;
	}
}

export function useThisData() {
	const mainReducer = useContext(ctx)
	const [state, dispatch] = mainReducer

	React.useEffect(()=> {
		main.getData(function(_d){
			dispatch({name: 'store', payload: _d.data});
		})
	}, [])

	return [state, dispatch]
}

export function useSocket() {
	const apapke = useContext(SocketCtx);
	const [state, dispatch] = apapke;
  	const socket = io('http://localhost:5002');

	function sendEdit(channel, payload){
		socket.emit(channel, payload);
		dispatch({name: 'sending to worker'});
	}

	return [sendEdit, state, dispatch];
}

export function useWeb3() {
	const web3Reducer = useContext(Web3Ctx);
	const [state, dispatch] = web3Reducer;
  	var web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/6b808284f7fe46f388577b042f331eaa'));
  	var admin_address = "0x8d9D6a151bfb4b7d5d37f61Be56964f755DE3767";

  	function getDataOfStudent(contract_address){
  		var a = new Paper(web3, contract_address, admin_address);
  		return new Promise(async(resolve, reject) => {
  			let res = await a.getPersonGrade();
  			resolve(res)
  		})
  	}

  	function setChanges(contract_address, _w, _l, _r){
  		dispatch({name: 'sending transaction', sending: true})
  		console.log(contract_address)
  		if(!contract_address) new Error(contract_address)
  		var a = new Paper(web3, contract_address, admin_address, "0x7E3BF0EB37EF6B60EAAA0E18150977F6CD2C31A8200D9F3EE05D6D8A937E61F5");
  		let date = new Date().getTime();
  		return new Promise(async(resolve, reject) => {
  			let res = await a.setChanges(date, _w, _l, _r);
  			resolve(res);
  		})
  	}

	return [{getDataOfStudent, setChanges}, state, dispatch];
}

export function Provider({children}){
	return (
		<ctx.Provider value={useReducer(Reducer, state)}>
			{children}
		</ctx.Provider>
	)
}

export function SocketProvider({children}){
	return (
		<SocketCtx.Provider value={useReducer(SocketReducer, state2)}>
			{children}
		</SocketCtx.Provider>
	)
}

export function Web3Provider({children}){
	return (
		<Web3Ctx.Provider value={useReducer(Web3Reducer, state3)}>
			{children}
		</Web3Ctx.Provider>
	)
}