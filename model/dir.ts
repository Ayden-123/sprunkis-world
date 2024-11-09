import { getSupabase } from '@/client/supabase'
import { SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from "uuid";
import { ChatItem } from './chat';


export declare type DirItem = {
    did: string;
    title: string;
    user_id: string;
    subChat?: ChatItem[];
};

export async function getDirByUserId(userId: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data: dirs, error } = await supabase.from('dir').select("*").eq("user_id", userId).order("created_at", { ascending: true })
        
        // if (!dirs || dirs.length === 0) {
        //     return [] as DirItem[]
        // }
        let default_dir: DirItem = { did: "0", user_id: userId, title: "default" }
        dirs.unshift(default_dir);
        const dids = dirs.map(dir => dir.did);
        const { data: chats } = await supabase
            .from('chat')
            .select('*')
            .in('did', dids)
            .eq('user_id', userId)
            .order('created_at', { ascending: false });

        dirs.forEach(dir => {
            dir.subChat = chats.filter(chat => chat.did === dir.did);
        });
        return dirs as DirItem[]
    } catch (error) {
        console.log('getDirByUserId遇到错误了', error)
        return []
    }
}

export async function insertDirByUserId(userId: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        const dirItem: DirItem = {
            did: uuidv4(),
            title: "New folder",
            user_id: userId,
        }
        let { data, error } = await supabase
            .from('dir')
            .insert(dirItem)
            .select()
        return data[0]
    } catch (error) {
        console.log('insertDirByUserId遇到错误了', error)
        return null
    }
}

export async function updateDirTitle(did: string, title: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('dir')
        .update([
            {
                title: title
            }
        ])
        .eq('did', did)
        .select()
        return data[0]
    } catch (error) {
        console.log('updateDirTitle遇到错误了', error)
        return null
    }
}

export async function deleteDir(did: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('dir')
        .delete()
        .eq('did', did)
        .select()
        return data[0]
    } catch (error) {
        console.log('deleteDir遇到错误了', error)
        return null
    }
}