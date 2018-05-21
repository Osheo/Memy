import * as UserModel from '../Models/UserModel';
import * as firebase from './../database/firebase';

export function getAllUsers(): Promise<Array<UserModel.Models.UserSystem>> {
    return firebase.getHTTP(`/users`, null);
}

export function getUserById(userId: number): Promise<UserModel.Models.UserSystem> {
    return firebase.getHTTP(`/users/${userId}`, null);
}

export function changeUserData(userId: number, userData: any): Promise<UserModel.Models.UserSystem> {
    return firebase.postHTTP(`/users/${userId}`, userData);
}
