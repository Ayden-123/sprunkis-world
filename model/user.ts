import { getSupabase } from '@/client/supabase'
import { SupabaseClient } from '@supabase/supabase-js';
import { use } from 'react';

export declare type UserEntity = {
    id?: number,
    email?: string,
    username?: string,
    createAt?: string,
    user_id?: string,
    credit?: number,
}

export async function insertUser(user: UserEntity) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('user')
        .insert([
            {   
                user_id: user.user_id,
                email: user.email,
                credit: user.credit
            }
        ])
        .select()
        return { user: data[0], error: null }
    } catch (error) {
        console.log('insertUser遇到错误了', error.toString())
        return { user: null, error: error }
    }
}


export async function updateUser(userId: string, user: UserEntity) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('user')
        .update([
            {   
                username: user.username
            }
        ])
        .eq('user_id', user.user_id)
        .select()
    } catch (error) {
        console.log('updateUser遇到错误了', error)
    }
}

export async function deleteUser(userId: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { error} = await supabase
        .from('user')
        .delete()
        .eq('user_id', userId)
        
    } catch (error) {
        console.log('deleteUser遇到错误了', error)
    }
}


export async function selectAllUser() {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data: user, error} = await supabase.from('user').select("*")
        return user
    } catch (error) {
        console.log('selectAllUser遇到错误了', error)
        return null
    }
}

export async function getUserById(userId: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data: user, error} = await supabase.from('user').select("*").eq('user_id', userId)
        return user[0]
    } catch (error) {
        console.log('getUserById遇到错误了', error)
        return null
    }
}

export async function updateCredit(userId: string, credit: number) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data: user, error} = await supabase.from('user').update( { credit: credit } ).eq('user_id', userId)
        return null
    } catch (error) {
        console.log('getUserById遇到错误了', error)
        return null
    }
}