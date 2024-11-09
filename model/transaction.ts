import { getSupabase } from '@/client/supabase'
import { NoncurrentVersionExpiration } from '@aws-sdk/client-s3';
import { SupabaseClient } from '@supabase/supabase-js';

export declare type Transaction = {
    stripe_id?: string,
    amount: number,
    credits: number,
    user_id: string,
};


export async function insertTransaction(transaction: Transaction) {
    try {
        const supabase: SupabaseClient = await getSupabase()
        let { data, error } = await supabase
            .from('transaction')
            .insert(transaction)
            .select()
        return data[0]
    } catch (error) {
        console.log('insertTransaction遇到错误了', error)
        return null
    }
}