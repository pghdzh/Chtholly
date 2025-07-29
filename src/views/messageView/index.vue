<template>
    <div class="board">
        <h1 class="title">✨ 珂朵莉留言墙</h1>
        <div class="messages">
            <div v-for="msg in messages" :key="msg.id" class="msg-card">
                <div class="msg-header">
                    <span class="msg-name">{{ msg.name }}</span>
                    <span class="msg-time">{{ formatTime(msg.created_at) }}</span>
                </div>
                <div class="msg-body">{{ msg.content }}</div>
            </div>
            <div v-if="!loading && messages.length === 0" class="empty">
                暂无留言，快来留下你的祝福吧 🌸
            </div>
        </div>
        <div class="form-wrap">
            <input v-model="newName" type="text" placeholder="你的昵称" class="form-input name" />
            <textarea v-model="newContent" placeholder="写下你的祝福..." class="form-input content"></textarea>
            <button @click="postMessage" :disabled="loading" class="form-btn">
                {{ loading ? '发送中…' : '送出祝福' }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getMessageList, createMessage } from '@/api/modules/message';

const messages = ref([]);
const loading = ref(false);
const newName = ref(localStorage.getItem('cb_user_name') || '');
const newContent = ref('');

async function fetchMessages() {
    loading.value = true;
    try {
        const res = await getMessageList({ page: 1, pageSize: 9999 });
        messages.value = res.data || [];
    } finally {
        loading.value = false;
    }
}

async function postMessage() {
    if (!newName.value.trim() || !newContent.value.trim()) return;
    loading.value = true;
    try {
        await createMessage({ name: newName.value.trim(), content: newContent.value.trim() });
        localStorage.setItem('cb_user_name', newName.value.trim());
        newContent.value = '';
        await fetchMessages();
    } finally {
        loading.value = false;
    }
}

function formatTime(ts) {
    const d = new Date(ts);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ` +
        `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}

onMounted(fetchMessages);
</script>

<style scoped lang="scss">
.board {
    display: flex;
    flex-direction: column;

    background: linear-gradient(to bottom right,
            #1e2e4d,
            #758cb3,
            #d06487);
    color: #f2ece4;
    height: 100vh;
    padding: 16px;
    padding-top: 80px;

}

.title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 12px;
    text-shadow: 0 0 6px rgba(255, 223, 232, 0.6);
}

.messages {
    flex: 1;
    overflow-y: auto;
    padding-right: 4px;



    .msg-card {
        background: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #ffdfe8;
        border-radius: 6px;
        padding: 12px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px #758cb3, ;
        }

        .msg-header {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            margin-bottom: 6px;

            .msg-name {
                font-weight: bold;
                color: #ffdfe8;
            }

            .msg-time {
                color: #ccc;
            }
        }

        .msg-body {
            line-height: 1.5;
        }
    }

    .empty {
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 30px;
        font-style: italic;
    }
}

.form-wrap {
    background: rgba(30, 36, 56, 0.9);
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 8px;

    .form-input {
        width: 100%;
        border: none;
        border-radius: 4px;
        padding: 8px;
        font-size: 1rem;
        background: #fff;
    }

    .name {

        color: #333;
    }

    .content {

        min-height: 80px;
        resize: vertical;
    }

    .form-btn {
        align-self: flex-end;
        background: #ffdfe8;
        color: #333;
        padding: 8px 16px;
        border: none;
        border-radius: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;

        &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(255, 223, 232, 0.5);
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
}

@media (max-width: 600px) {


    .title {
        font-size: 1.5rem;
    }

    .form-wrap {
        padding: 8px;
    }
}
</style>
