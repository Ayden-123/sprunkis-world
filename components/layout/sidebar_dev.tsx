'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import { Check, ChevronDown, ChevronRight, MessageSquare, Pencil, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { message } from 'antd';
import { DirItem } from '@/model/dir';
import { useLoading } from '@/components/loading/LoadingContext';
import { ChatItem } from '@/model/chat';
import FullScreenLoader from '../loading/FullScreenLoader';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Sidebar = () => {
    const pathname = usePathname();
    const { setLoading } = useLoading(); // 局部等待，比如添加目录时，提示一下
    const [globalLoading, setGlobalLoading] = useState(false);   // 页面未加载出来，页面加蒙版，全局等待
    const [dirs, setDirs] = useState<DirItem[]>([]);
    const [openDid, setOpenDid] = useState("");
    const router = useRouter();

    const fetchDirs = async () => {
        try {
            setGlobalLoading(true);

            let cid = ""
            const pathParts = pathname.split('/').filter(Boolean);
            if (pathParts.length >= 2 && pathParts[0] === 'chat' && pathParts[1]) {
                cid = pathParts[1]
            }
            const body = {
                cid: cid
            };
            const resp = await fetch("/api/v1/dir/getDirsByUserId", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });

            if (resp.status === 200) {
                const data = await resp.json();
                if (data.openDid !== null && data.openDid !== "") {
                    setOpenDid(data.openDid)
                }
                setDirs(data.dirs);
            } else {
                throw new Error('Network response was not ok');
            }
            setGlobalLoading(false);
        } catch (error) {
            message.warning("网络错误, 请稍后再试..");
            setGlobalLoading(false);
        }
    };

    useEffect(() => {
        
        fetchDirs();
    }, []);

    const insertDir = async () => {
        try {
            setLoading(true, "正在添加目录...");
            const resp = await fetch("/api/v1/dir/insertDirByUserId", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (resp.status === 200) {
                const data = await resp.json();
                if (data.dirItem) {
                    setLoading(false);
                    setDirs([...dirs, data.dirItem as DirItem]);
                    message.success("添加目录成功");
                } else {
                    throw new Error('Network response was not ok');
                }
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            setLoading(false);
            message.warning("网络错误, 请稍后再试..");
        }
    }

    const onDragEnd = async (result: any) => {
        const { source, destination, draggableId, type } = result
        try {
            if (!destination || type == "dir") {
                return
            }

            setLoading(true, "正在移动chat...");
            const body = {
                cid: draggableId,
                did: destination.droppableId
            };
            const resp = await fetch("/api/v1/chat/removeChat", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            if (resp.status === 200) {
                setLoading(false);
                message.success("移动目录成功");
                fetchDirs()
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            setLoading(false);
            message.warning("网络错误, 请稍后再试..");
        }
    }

    return (
        <>
            {globalLoading && <FullScreenLoader message="Loading in progress..." />}
            <aside className="w-64 p-2 bg-sidebar_bg">
                <div className="mb-2 flex flex-row justify-between items-center">
                    <Link
                        href="/home"
                        className="w-4/5 text-white py-3 px-2 rounded bg-transparent border border-white/20 text-sm flex items-center"
                    >
                        <div className='px-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" />
                            </svg>
                        </div>
                        <div className='px-2'>
                            New chat
                        </div>
                    </Link>
                    <button className="h-10 text-white px-3 rounded bg-transparent border border-white/20" onClick={insertDir}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-folder-plus">
                            <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"></path>
                            <path d="M16 19h6"></path>
                            <path d="M19 16v6"></path>
                        </svg>
                    </button>
                </div>

                <input type="text" placeholder="Search..." className="text-sm w-full bg-transparent text-white py-3 px-3 rounded mb-4 border border-white/20" />

                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="mb-2">
                        <nav className="grid items-start">
                            <div>
                                <Droppable droppableId="dir" type="dir" direction="vertical">
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {dirs.slice(1).map((item, index) => (
                                                <DirBar key={index} index={index} item={item} openDid={openDid} />
                                            ))}

                                            {dirs.slice(0, 1).map((item, index) => (
                                                <DirBar key={index} index={index} item={item} openDid={openDid} />
                                            ))}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </nav>
                    </div>
                </DragDropContext>


            </aside>
        </>
    );
}



function DirBar({ item, index, openDid }: { item: DirItem, index: number, openDid: string }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(item.did === openDid);

    // 预删除 和 预编辑
    const [preDelete, setPreDelete] = useState(false);
    const [preEdit, setPreEdit] = useState(false);
    const [editedTitle, setEditedTitle] = useState(item.title);

    return (
        <Draggable draggableId={item.did} index={index} key={item.title}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps}>
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            marginBottom: '8px',
                            marginTop: '8px',
                            fontSize: '16px',
                        }}
                        key={item.did}
                    >
                        {item.did == "0" ?
                            (
                                <div>
                                    <div className="w-full">
                                        <div className="h-px bg-white/20"></div>
                                    </div>
                                    <Droppable droppableId={item.did} type="chat" direction="horizontal">
                                        {(dropProvided, dropSnapshot) => (
                                            <div ref={dropProvided.innerRef} {...dropProvided.droppableProps} key={item.did}>
                                                <div className="mb-2 pt-2 px-2">
                                                    <nav className="grid items-start">
                                                        {item.subChat.map((subItem, index) => (
                                                            <ChatBar key={index} item={subItem} index={index} />
                                                        ))}
                                                    </nav>
                                                </div>
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            )

                            :

                            (
                                <div>
                                    <div
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-lg p-2 hover:bg-sidebar_selected font-sans text-white text-sm font-normal tracking-wide"
                                        )}
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <div className='flex items-center'>
                                            {
                                                isOpen ? (
                                                    <ChevronDown size={18} />
                                                ) : (
                                                    <ChevronRight size={18} />
                                                )
                                            }
                                            {preEdit ? (
                                                <input
                                                    type="text"
                                                    value={editedTitle}
                                                    onChange={(e) => setEditedTitle(e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-gray-700 text-white px-2 py-1 rounded"
                                                />
                                            ) : (
                                                <span className='px-2'>{item.title}</span>
                                            )}
                                        </div>

                                        <div className='flex items-center'>
                                            {
                                                preDelete || preEdit ? (

                                                    <>
                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}>
                                                            <Check size={18} className='hover:text-green-500' />
                                                        </button>

                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            setPreDelete(false);
                                                            setPreEdit(false);
                                                        }}>
                                                            <X size={18} className='hover:text-red-500' />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            setPreEdit(true);
                                                        }}>
                                                            <Pencil size={18} className='hover:text-green-500 text-sidebar_svg_default' />
                                                        </button>
                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            setPreDelete(true);
                                                        }}>
                                                            <Trash2 size={18} className='hover:text-red-500  text-sidebar_svg_default' />
                                                        </button>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <Droppable droppableId={item.did} type="chat" direction="horizontal">
                                        {(dropProvided, dropSnapshot) => (
                                            <div ref={dropProvided.innerRef} {...dropProvided.droppableProps} key={item.did}>
                                                {isOpen && item.subChat && item.subChat.length > 0 && (
                                                    <div className="ml-4">
                                                        {item.subChat.map((subItem, index) => (
                                                            <ChatBar item={subItem} index={index} />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            )
                        }
                    </div>

                </div>
            )}
        </Draggable>
    );
}

function ChatBar({ item, index }: { item: ChatItem, index: number }) {

    const pathname = usePathname();
    const openCid = pathname.split('/').filter(Boolean)[1];
    return (

        <Draggable draggableId={item.cid} index={index} key={item.cid} >
            {(dragProvided, dragSnapshot) => (
                <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                    key={item.cid}
                >
                    <Link
                        href={`/chat/${item.cid}`}
                        className={cn("flex items-center rounded-lg p-2 text-sm text-white hover:bg-sidebar_selected w-full overflow-hidden",
                            item.cid === openCid && "bg-sidebar_selected"
                        )}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-shrink-0 w-[18px] h-[18px] mr-2 text-sidebar_svg_default"
                        >
                            <path d="M8 9h8"></path>
                            <path d="M8 13h6"></path>
                            <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                        </svg>

                        <span className="truncate flex-grow min-w-0 font-sans text-white text-sm font-normal tracking-wide">{item.title}</span>
                    </Link>
                </div>
            )}
        </Draggable>
    );
}

export default Sidebar




