import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sendCommand } from '../api'
import { Button } from './ui/button'

export function Browse() {
  const queryClient = useQueryClient()
  const [streamUrl, setStreamUrl] = useState('')

  const playMutation = useMutation({
    mutationFn: (url: string) => sendCommand('in_play', url),
    onSuccess: () => {
      setStreamUrl('')
      queryClient.invalidateQueries({ queryKey: ['status'] })
      queryClient.invalidateQueries({ queryKey: ['playlist'] })
    },
  })

  // To cleanly implement directory browsing without backend Lua modification, we would need to poll `/requests/browse.xml`
  // For the sake of this SPA, we'll start with explicitly allowing the user to paste Network Streams or absolute file URLs.
  
  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-6 py-4">
        <h2 className="text-2xl font-semibold">Browse Media</h2>
      </div>
      <div className="p-6 max-w-2xl">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h3 className="font-medium">Open Network Stream / Video URI</h3>
            <p className="text-sm text-muted-foreground">
              Please enter a network URL (e.g. HTTP, RTSP, RTMP) or an absolute local file URI (e.g. file:///Users/...).
            </p>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="https://... or file:///..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={streamUrl}
                onChange={(e) => setStreamUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && streamUrl.trim()) {
                    playMutation.mutate(streamUrl.trim())
                  }
                }}
              />
              <Button onClick={() => playMutation.mutate(streamUrl.trim())} disabled={!streamUrl.trim() || playMutation.isPending}>
                Play URL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
