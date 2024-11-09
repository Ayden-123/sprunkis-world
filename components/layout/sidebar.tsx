'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import { Check, ChevronDown, ChevronRight, MessageSquare, Pencil, Trash2, X } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";
import { message } from 'antd';
import { DirItem } from '@/model/dir';
import { useLoading } from '@/components/loading/LoadingContext';
import { ChatItem } from '@/model/chat';
import FullScreenLoader from '../loading/FullScreenLoader';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { UserEntity } from '@/model/user';
import { dir } from 'console';

const Sidebar = () => {
  const pathname = usePathname();
  const { setLoading } = useLoading(); // 局部等待，比如添加目录时，提示一下
  const [globalLoading, setGlobalLoading] = useState(false);   // 页面未加载出来，页面加蒙版，全局等待
  const [dirs, setDirs] = useState<DirItem[]>([]);
  const [openDid, setOpenDid] = useState("");
  const [user, setUser] = useState<UserEntity>({ credit: 0 });
  const router = useRouter();

  const fetchDirs = async () => {
    try {

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
    } catch (error) {
      message.warning("Network error. Please try again later..");
    }
  };

  const fetchUserInfo = async () => {
    const body = {};
    const response = await fetch("/api/v1/user/getUserInfo", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (response.status === 200) {
      const resp = await response.json();
      console.log('resp为', resp)
      if (resp.user) {
        setUser(resp.user)
      } else {
        message.warning("Network error. Please try again later.");
      }
    } else {
      message.warning("Network error. Please try again later..");
    }
  }

  const fetchData = async () => {
    setGlobalLoading(true);
    await fetchDirs()
    await fetchUserInfo()
    setGlobalLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const insertDir = async () => {
    try {
      setLoading(true, "Adding directory in progress....");
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
          message.success("Directory added successfully.");
        } else {
          throw new Error('Network response was not ok');
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setLoading(false);
      message.warning("Network error. Please try again later...");
    }
  }

  const onDragEnd = async (result: any) => {
    const { source, destination, draggableId, type } = result
    try {
      if (!destination || type == "dir") {
        return
      }

      setLoading(true, "Moving chat in progress....");
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
        message.success("Directory moved successfully.");
        fetchDirs()
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setLoading(false);
      message.warning("Network error. Please try again later...");
    }
  }

  return (
    <>
      {globalLoading && <FullScreenLoader message="Loading in progress..." />}
      <aside className="w-64 p-2 bg-sidebar_bg flex flex-col min-h-screen h-full">
        <div className="mb-2 flex flex-row justify-between items-center ">
          <Link
            href="/home"
            className="w-4/5 text-white py-3 px-2 rounded bg-transparent border border-white/20 text-sm flex items-center"
          >
            <div className='px-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" />
              </svg>
            </div>
            <div className='px-2'>
              Create New
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

        <div>
          {dirs.length >= 1 ? (
            <DragDropContext onDragEnd={onDragEnd} className="max-h-[300px] overflow-y-auto">
              <div className="mb-2 ">
                <nav className="">
                  <div >
                    <Droppable droppableId="dir" type="dir" direction="vertical" >
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
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-center">Your gallery is empty.</p>
              <p className="text-center text-sm mt-2">Create your first AI Poster image to get started!</p>
            </div>
          )}
        </div>


        <div className='text-white w-full mt-auto'>
          <div className="w-full">
            <div className="bg-white/20"></div>
          </div>
          <div className="border border-white/20 rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-300">Available Credits</span>
              <span className="text-lg font-bold text-purple-400">{user.credit}</span>
            </div>
            <a href='/pricing' className="w-full block">
              <div className='w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md text-sm font-medium transition duration-300 flex items-center justify-center space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Pricing</span>
              </div>
            </a>
          </div>

          <div className='p-4 flex items-center space-x-4'>
            <SignedIn>
              <UserButton>
              </UserButton>
            </SignedIn>
          </div>
        </div>
      </aside>
    </>
  );
}

function DirBar({ item, index, openDid }: { item: DirItem, index: number, openDid: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(item.did === openDid);
  const router = useRouter();
  // 预删除 和 预编辑
  const [preDelete, setPreDelete] = useState(false);
  const [preEdit, setPreEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const { setLoading } = useLoading();

  const confirmCheck = async () => {
    if (preDelete) {
      setLoading(true, "Deleting in progress....");
      const response = await fetch('/api/v1/dir/deleteDir', {
        method: "POST",
        body: JSON.stringify({
          did: item.did,
        })
      })

      if (response.status == 200) {
        message.success("Deleted successfully. ")
        setPreDelete(false)
        setLoading(false)
        window.location.reload()
      } else {
        setPreDelete(false)
        setLoading(false)
      }

    } else if (preEdit) {
      if (editedTitle.trim() === "") {
        message.warning("Title cannot be empty")
        return
      }
      setLoading(true, "Renaming in progress....");
      const response = await fetch('/api/v1/dir/updateDirTitle', {
        method: "POST",
        body: JSON.stringify({
          did: item.did,
          title: editedTitle
        })
      })

      if (response.status == 200) {
        message.success("Title updated")
        setEditedTitle(editedTitle)
        setPreEdit(false)
        setLoading(false)
        window.location.reload()
      } else {
        setPreEdit(false)
        setLoading(false)
      }
    }
  };

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
                <div className=''>
                  <div className="w-full">
                    <div className="h-px bg-white/20"></div>
                  </div>
                  <div className='max-h-[300px] overflow-y-auto'>
                    <Droppable droppableId={item.did} type="chat" direction="horizontal" className="">
                      {(dropProvided, dropSnapshot) => (
                        <div ref={dropProvided.innerRef} {...dropProvided.droppableProps} key={item.did}>
                          <div className="mb-2 pt-2">
                            <nav className="">
                              {item.subChat.map((subItem, index) => (
                                <ChatBar key={index} item={subItem} index={index} did={item.did} />
                              ))}
                            </nav>
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
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
                            <button className="px-2" onClick={(e) => {
                              e.stopPropagation();
                              confirmCheck()
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
                            <button className="px-2" onClick={(e) => {
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
                              <ChatBar item={subItem} index={index} did={item.did} />
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

function ChatBar({ item, index, did }: { item: ChatItem, index: number, did: string }) {

  const pathname = usePathname();
  const openCid = pathname.split('/').filter(Boolean)[1];
  // 预删除 和 预编辑
  const [preDelete, setPreDelete] = useState(false);
  const [preEdit, setPreEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const { setLoading } = useLoading();

  const confirmCheck = async () => {
    if (preDelete) {
      setLoading(true, "Deleting in progress...");
      const response = await fetch('/api/v1/chat/deleteChat', {
        method: "POST",
        body: JSON.stringify({
          cid: item.cid,
        })
      })

      if (response.status == 200) {
        message.success("Deleted successfully. ")
        setPreDelete(false)
        setLoading(false)
        window.location.reload()
      } else {
        setPreDelete(false)
        setLoading(false)
      }

    } else if (preEdit) {
      if (editedTitle.trim() === "") {
        message.warning("Title cannot be empty")
        return
      }
      setLoading(true, "Renaming in progress...");
      const response = await fetch('/api/v1/chat/updateChatTitle', {
        method: "POST",
        body: JSON.stringify({
          cid: item.cid,
          title: editedTitle
        })
      })

      if (response.status == 200) {
        message.success("Title updated")
        setEditedTitle(editedTitle)
        setPreEdit(false)
        setLoading(false)
        window.location.reload()
      } else {
        setPreEdit(false)
        setLoading(false)
      }
    }
  };

  return (
    <Draggable draggableId={item.cid} index={index} key={item.cid} >
      {(dragProvided, dragSnapshot) => (
        <div
          ref={dragProvided.innerRef}
          {...dragProvided.dragHandleProps}
          {...dragProvided.draggableProps}
          key={item.cid}
        >
          <a
            href={preEdit || preDelete ? undefined : `/chat/${item.cid}`}
            className={cn("flex items-center rounded-lg p-2 text-sm text-white hover:bg-sidebar_selected w-full overflow-hidden",
              item.cid === openCid && "bg-sidebar_selected",
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

            {preEdit ? (
              <div className='' onClick={(e) => {
                e.stopPropagation()
                e.preventDefault();
              }}>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="bg-gray-700 text-white py-1 rounded pointer-events-auto"
                />
              </div>
            ) : (
              <span className="truncate cursor-pointer flex-grow min-w-0 font-sans text-white text-sm font-normal tracking-wide">
                {item.title}
              </span>
            )}
            {did === "0" &&
              <div className='flex items-center'>
                {
                  preDelete || preEdit ? (

                    <>
                      <button className="px-2" onClick={(e) => {
                        e.preventDefault(); // 阻止默认行为
                        e.stopPropagation();
                        confirmCheck()
                        setPreDelete(false);
                        setPreEdit(false);
                      }}>
                        <Check size={18} className='hover:text-green-500' />
                      </button>

                      <button onClick={(e) => {
                        e.preventDefault(); // 阻止默认行为
                        e.stopPropagation();
                        setPreDelete(false);
                        setPreEdit(false);
                      }}>
                        <X size={18} className='hover:text-red-500' />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className=" px-2" onClick={(e) => {
                        e.preventDefault(); // 阻止默认行为
                        e.stopPropagation();
                        setPreEdit(true);
                      }}>
                        <Pencil size={18} className='hover:text-green-500 text-sidebar_svg_default' />
                      </button>
                      <button onClick={(e) => {
                        e.preventDefault(); // 阻止默认行为
                        e.stopPropagation();
                        setPreDelete(true);
                      }}>
                        <Trash2 size={18} className='hover:text-red-500  text-sidebar_svg_default' />
                      </button>
                    </>
                  )
                }
              </div>
            }
          </a>
        </div>
      )}
    </Draggable>
  );
}

export default Sidebar




