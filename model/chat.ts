import { getSupabase } from '@/client/supabase'
import { SupabaseClient } from '@supabase/supabase-js';

export declare type ChatItem = {
    title: string,
    source_type: string,
    cid: string,
    user_id: string,
    did: string,
    prompt?: string,
    images?: string[],
    cover: string,
    style_type?: string,
    content_type?: string, // 精准型 还是 描述型, url和file时需要
    magic_option?: string, // 是否开启prompt扩展功能，text时需要
    magic_prompt?: string,
    created_at?: string,
    url?: string, // url格式生成
    file?: string, // file格式生成
    model?: string,
    seed?: string,
    aspect_ratio?: string,
  };
  

  export async function insertChat(chatItem: ChatItem) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('chat')
        .insert(chatItem)
        .select()
        return data[0]
    } catch (error) {
        console.log('insertChat遇到错误了', error)
        return null
    }
}

export async function getChatByCid(cid: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data: chatItems, error} = await supabase.from('chat').select("*").eq("cid", cid)
        
        if (!chatItems || chatItems.length === 0) {
            return null
        }
        return chatItems[0]
    } catch (error) {
        console.log('getDirByUserId遇到错误了', error)
        return null
    }
}

export async function updateChatTitle(cid: string, title: string) {
    try {
        console.log('updateChatTitle', cid, title)
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('chat')
        .update([
            {
                title: title
            }
        ])
        .eq('cid', cid)
        .select()
        return data[0]
    } catch (error) {
        console.log('updateChatTitle遇到错误了', error)
        return null
    }
}


export async function removeChat(cid: string, did: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('chat')
        .update([
            {
                did: did
            }
        ])
        .eq('cid', cid)
        .select()
        return data[0]
    } catch (error) {
        console.log('removeChat到错误了', error)
        return null
    }
}

export async function deleteChat(cid: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('chat')
        .delete()
        .eq('cid', cid)
        .select()
        return data[0]
    } catch (error) {
        console.log('deleteChat遇到错误了', error)
        return null
    }
}