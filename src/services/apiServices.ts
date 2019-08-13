import { Post, Thread, User } from '../types';

const postsByThreadId: { [threadId: string]: Post[] } = {};
const threadByThreadId: { [threadId: string]: Thread } = {};
const threadsByUserId: { [userId: string]: Thread[] } = {};
const usersByUserId: { [userId: string]: User } = {};

export const getPostsByThreadId = (threadId: number) => {};
export const getThreadByThreadId = (threadId: number) => {};
export const getThreadsByUserId = (userId: number) => {};
export const getUsersByUserId = (userId: number) => {};
