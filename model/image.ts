import { getSupabase } from '@/client/supabase'
import { SupabaseClient } from '@supabase/supabase-js';

export declare type ImageEntity = {
    id?: number,
    createAt?: string,
    user_id?: string,
    url?: string,
    file_name?: string,
    prompt?: string,
    type?: string,
    extra?: string,
}

export async function insertImage(image: ImageEntity) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error} = await supabase
        .from('image')
        .insert([
            {   user_id: image.user_id,
                url: image.url,
                file_name: image.file_name,
                type: image.type,
                extra: image.extra
            }
        ])
        .select()
        return true;
    } catch (error) {
        console.log('insertImage遇到错误了', error.toString())
        return false;
    }
}


export async function getImagesByUserIdAndType(userId: string, type: string) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        if (type === 'all') {
            let { data: images, error} = await supabase.from('image').select("*").eq("user_id", userId)
            return images
        } else {
            let { data: images, error} = await supabase.from('image').select("*").eq("user_id", userId).eq("type", type)
            return images
        }
    } catch (error) {
        console.log('getImagesByUserIdAndType遇到错误了', error)
        return []
    }
}